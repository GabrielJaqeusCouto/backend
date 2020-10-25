const express = require('express');
const routes = express.Router();


const Responsavel = require('./controllers/ResponsavelController')
const Crianca = require('./controllers/CriancaController')
const Exercicio = require('./controllers/ExercicioController')
const Refeicao = require('./controllers/RefeicaoController')
const TipoExercicio = require('./controllers/TipoExercicioController')
const TipoComida = require('./controllers/TipoComidaController')


routes.get('/responsaveis', Responsavel.index)
routes.post('/responsaveis', Responsavel.create)
routes.put('/responsaveis:id', Responsavel.update)
routes.delete('/responsaveis:id', Responsavel.delete)


routes.get('/criancas', Crianca.index)
routes.post('/criancas', Crianca.create)
routes.put('/criancas:id', Crianca.update)
routes.delete('/criancas:id', Crianca.delete)



routes.get('/exercicios', Exercicio.index)
routes.post('/exercicios', Exercicio.create)
routes.put('/exercicios:id', Exercicio.update)


routes.get('/refeicoes', Refeicao.index)
routes.post('/refeicoes', Refeicao.create)
routes.put('/refeicoes:id', Refeicao.update)


routes.get('/tipoexercicio', TipoExercicio.index)
routes.get('/tipocomida', TipoComida.index)

module.exports = routes;