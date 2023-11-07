exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("user_id").primary().notNullable().increment;
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("user_name");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("user");
