exports.up = knex => knex.schema.createTable('refeicao', table => {
    table.increments('id')
    table.integer('tempo').notNullable()
    table.timestamp('data_hora').defaultTo(knex.fn.now())   
    table.text('status').notNullable()

    table.integer('crianca_id').references('id').inTable('criancas')
    table.integer('tipo_comida_id').references('id').inTable('tipo_comidas')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex =>  knex.schema.dropTable('refeicao');