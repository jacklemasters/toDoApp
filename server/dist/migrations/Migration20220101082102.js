"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220101082102 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220101082102 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20220101082102 = Migration20220101082102;
//# sourceMappingURL=Migration20220101082102.js.map