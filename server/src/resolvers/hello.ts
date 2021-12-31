import { Query, Resolver } from "type-graphql";

//Graphql Schema 
@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello() {
        return "Hello Liv"
    }
}