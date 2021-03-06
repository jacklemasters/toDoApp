import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import {buildSchema} from "type-graphql";
import {UserResolver}  from "./resolvers/user";
import { PostResolver } from "./resolvers/post";
import "reflect-metadata";
import connectRedis from 'connect-redis';
import { MyContext } from "./types";



const main = async () => {

    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
    const app = express();
    const redis = require('redis')
    const session = require('express-session')
    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();
    

    app.use(
        session({
            name: 'qid',
            store: new RedisStore({ 
                client: redisClient,
                disableTouch: true
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "Lax", //csrf
                secure: __prod__
            },
            saveUninitialized: false,
            secret: 'werqwefgqfqwefeqwrfasd',
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ PostResolver, UserResolver],
            validate: false
        }),
        context: ({req, res}): MyContext => ( {em: orm.em, req, res} ),
    });
    

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => {
        console.log('server started on port 4000')
    });

};

main();


