const knex = require('../database')

module.exports = {
    async index(req, res) {
       const results = await knex('responsaveis');

       return res.json(results);
    },

    async create(req, res, next) {
        try {
            const { nome, 
                    email, 
                    senha 
                } = req.body            

            await  knex('responsaveis').insert({
                nome, 
                email,
                senha
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
                    senha 
                } = req.body 

            const { id } = req.params

            await knex('responsaveis').update({
                nome, 
                email, 
                senha 
            }).where({ id })

            return status.send( )
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('responsaveis')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}