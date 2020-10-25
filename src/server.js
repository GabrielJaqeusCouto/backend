const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json())
app.use(routes)

//notFound
app.use((req, res, next) => {
    const error = new Error('Deu ruim meu nego!')
    error.status = 404 
    next(error)
})

//todos os catch caem aqui
app.use((error, req, res, next) => {
    res.status(error.status ||  500)
    res.json({ error: error.message})
})

app.listen(3333, () => console.log('Olha o servidor rodando') );