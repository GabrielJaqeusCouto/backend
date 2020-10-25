const knex = require('../database')

module.exports = {
    async index(req, res) {
       const results = await knex('refeicoes');

       return res.json(results);
    },

    async create(req, res, next) {
        try { 
            const { tempo,
                    crianca_id,
                    tipo_comida_id 
                } = req.body  
                
            const status = 'P';

            await  knex('refeicoes').insert({
                tempo,
                status,
                crianca_id,
                tipo_comida_id
            })            

            return res.status(201).send();
        } catch (error) {
            next(error)
        }        
    },

    async update(req, res, next) {
        try {
            const { status } = req.body 

            const { id } = req.params

            await knex('refeicoes').update({
                status  
            }).where({ id })

            return status.send()            
        } catch (error) {
            next(error)
        }
    }
}