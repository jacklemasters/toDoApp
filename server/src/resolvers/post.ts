import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Post } from "../entities/Post"

//Graphql Schema 
@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() { em }: MyContext): Promise<Post[]> {
        return em.find(Post, {});
    }
    @Query(() => Post, {nullable: true})
    post(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext): Promise<Post | null> {
        return em.findOne(Post, { id });
    }
    @Mutation(() => Post)
    async createPost(
        @Arg('titles') titles: string,
        @Ctx() { em }: MyContext): Promise<Post> {
        const post = em.create(Post, {titles})
        await em.persistAndFlush(post);
        return post;

    }
    @Mutation(() => Post, {nullable: true})
    async updatePost(
        @Arg('id') id: number,
        @Arg("titles", () => String, { nullable: true}) titles: string,
        @Ctx() { em }: MyContext): Promise<Post | null> {
        const post = await em.findOne(Post, {id});
        if (!post) {
            return null;
        }
        if (typeof titles !== "undefined"){
            post.titles = titles;
            await em.persistAndFlush(post);
        }
        return post;

    }
    @Mutation(() => Boolean)
    async deletePost(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext): Promise<boolean> {

        await em.nativeDelete(Post, { id });


        return true;

    }
}