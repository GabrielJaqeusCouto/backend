const knex = require('../database')

module.exports = {
    async index(req, res) {
       const  { responsavel_id } = req.query

       const query = knex('criancas');

       if ( responsavel_id ) {
           query.where({ responsavel_id })
       }

       const results = await query

       return res.json(results);
    },

    async create(req, res, next) {
        try {        
            const { nome,
                    email,
                    senha,
                    altura,
                    idade,
                    peso,
                    responsavel_id 
                } = req.body            

            await  knex('criancas').insert({
                nome,
                email,
                senha,
                altura,
                idade,
                peso,
                responsavel_id
            })            

            return res.status(201).send();
        } catch (error) {
            next(error)
        }        
    },

    async update(req, res, next) {
        try {
            const { nome,
                    email,
                    senha,
                    altura,
                    idade,
                    peso,
                    responsavel_id 
                } = req.body 

            const { id } = req.params

            await knex('criancas').update({
                nome,
                email,
                senha,
                altura,
                idade,
                peso,
                responsavel_id  
            }).where({ id })

            return status.send()
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('criancas')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}