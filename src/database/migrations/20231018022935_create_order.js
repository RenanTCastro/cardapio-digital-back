exports.up = function (knex) {
  return knex.schema.createTable("order", (table) => {
    table.increments("order_id").primary().increment;
    table.integer("user_id");
    table.foreign("user_id").references("user.user_id").onDelete("CASCADE");
    table.string("order_status").notNullable();
    table.string("order_client_name").notNullable();
    table.integer("order_table").notNullable();
    table.integer("order_number").notNullable();
    table.decimal("order_price", 8, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("order");
