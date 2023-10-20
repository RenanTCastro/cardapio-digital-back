exports.up = (knex) => knex.schema.renameTable("user", "users");
exports.down = (knex) => knex.schema.renameTable("users", "user");
