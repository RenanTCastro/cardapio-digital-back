exports.up = function (knex) {
  return knex.schema.createTable("product", (table) => {
    table.increments("product_id").primary().increment;
    table.integer("user_id");
    table.foreign("user_id").references("user.user_id").onDelete("CASCADE");
    table.string("product_name").notNullable();
    table.string("product_description").notNullable();
    table.string("product_image").notNullable();
    table.decimal("product_price", 8, 2).notNullable();
  });
};

exports.down = (knex) => knex.schema.dropTable("product");
