"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./resolvers/user");
const post_1 = require("./resolvers/post");
require("reflect-metadata");
const connect_redis_1 = __importDefault(require("connect-redis"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const app = (0, express_1.default)();
    const redis = require('redis');
    const session = require('express-session');
    const RedisStore = (0, connect_redis_1.default)(session);
    const redisClient = redis.createClient();
    app.use(session({
        name: 'qid',
        store: new RedisStore({
            client: redisClient,
            disableTouch: true
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "Lax",
            secure: constants_1.__prod__
        },
        saveUninitialized: false,
        secret: 'werqwefgqfqwefeqwrfasd',
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [post_1.PostResolver, user_1.UserResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ em: orm.em, req, res }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('server started on port 4000');
    });
};
main();
//# sourceMappingURL=index.js.map