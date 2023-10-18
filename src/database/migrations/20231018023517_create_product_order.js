exports.up = function (knex) {
  return knex.schema.createTable("product_order", (table) => {
    table.increments("product_order_id").primary().increment;
    table.integer("user_id");
    table.integer("order_id");
    table.integer("product_id");
    table.foreign("user_id").references("user.user_id").onDelete("CASCADE");
    table.foreign("order_id").references("order.order_id").onDelete("CASCADE");
    table
      .foreign("product_id")
      .references("product.product_id")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("product_order");
