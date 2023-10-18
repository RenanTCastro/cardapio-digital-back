exports.up = function (knex) {
  return knex.schema.createTable("category", (table) => {
    table.increments("category_id").primary().increment;
    table.string("category_name").notNullable();
    table.string("category_image");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("category");
