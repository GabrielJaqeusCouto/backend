exports.seed = function(knex) {
  return knex('tipo_comidas').del()
    .then(function () {
      return knex('tipo_comidas').insert([
        { legenda: 'arroz', calorias: 0.5, categoria: 'c' },
        { legenda: 'agua', calorias: 0.5, categoria: 'b' }
      ]);
    });
};
