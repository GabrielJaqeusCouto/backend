
exports.up = knex => knex.schema.createTable('responsaveis', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('email').unique().notNullable()
    table.text('senha').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex =>  knex.schema.dropTable('responsaveis');