module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "db_cardapio_digital",
      user: "postgres",
      password: "admin",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};
