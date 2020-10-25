exports.seed = function(knex) {
  return knex('tipo_exercicios').del()
    .then(function () {
      return knex('tipo_exercicios').insert([
        { legenda: 'correr', calorias: 0.5 }
      ]);
    });
};
