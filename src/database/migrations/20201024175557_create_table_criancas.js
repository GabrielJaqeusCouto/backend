
exports.up = knex => knex.schema.createTable('criancas', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('email').unique().notNullable()
    table.text('senha').notNullable()
    table.float('altura').notNullable()
    table.integer('idade').notNullable()
    table.float('peso').notNullable()

    table.integer('responsavel_id').references('id').inTable('responsaveis')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex =>  knex.schema.dropTable('criancas');
