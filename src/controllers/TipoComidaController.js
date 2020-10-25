const knex = require('../database')

module.exports = {
    async index(req, res) {
       const results = await knex('tipo_comidas');

       return res.json(results);
    }
}