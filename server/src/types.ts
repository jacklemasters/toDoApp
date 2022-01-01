import { Connection, EntityManager, IDatabaseDriver, ORMDomain } from "@mikro-orm/core";

export type MyContext = {
    em: EntityManager<IDatabaseDriver<Connection>>
}