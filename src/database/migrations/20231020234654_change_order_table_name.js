exports.up = (knex) => knex.schema.renameTable("order", "orders");
exports.down = (knex) => knex.schema.renameTable("orders", "order");
