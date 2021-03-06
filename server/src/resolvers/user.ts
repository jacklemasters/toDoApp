
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql"
import argon2 from "argon2";
import { MyContext } from "src/types";
import { User } from "../entities/User";


@InputType()
class UsernamePasswordInput{
    @Field()
    username: string;
    @Field()
    password: string;
}

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => User, {nullable: true})
    user?: User;
}


//Graphql Schema 
@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() {em}: MyContext
    ): Promise<UserResponse> {
        if (options.username.length <=2) {
            return {
                errors: [{
                    field: "username",
                    message: "Length must be greater than two characters"
                }]
            }
        }

        if (options.password.length <=6) {
            return {
                errors: [{
                    field: "password",
                    message: "Password Length must be greater than 6 characters"
                }]
            }
        }


        const hashedPassword = await argon2.hash(options.password)
        const user = em.create(User, {
            username: options.username,
            password: hashedPassword
        });
        try {
        await em.persistAndFlush(user);
        } catch(err){
            if(err.code === '23505'){
                return{
                    errors:[{
                        field: "username",
                        message : "Username already taken"
                    }]
                }
            }

        }
        return {user};
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() {em, req}: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, {username: options.username});
        if (!user) {
            return {
                errors: [{
                    field: 'username',
                    message: "That username doesnt't exist"
                }]
            }
        }
        const valid = await argon2.verify(user.password, options.password)
        if (!valid) {
            return {
                errors: [{
                    field: 'password',
                    message: "incorrect password"
                }]
            }
        }

        req.session.userId = user.id;


        return {
            user,
        };
    }
}