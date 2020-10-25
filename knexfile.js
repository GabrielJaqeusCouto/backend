module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "nyotietn",
      user: "nyotietn",
      password: "qDMObdPKsnE970E0LiVDWR3F3n1881Ty",
      host: "lallah.db.elephantsql.com"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
