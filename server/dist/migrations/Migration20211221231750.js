"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211221231750 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211221231750 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "titles" text not null);');
    }
}
exports.Migration20211221231750 = Migration20211221231750;
//# sourceMappingURL=Migration20211221231750.js.map