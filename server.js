const express = require('express');

var app = express(); // seta o servidor para a variável app

// Routing refers to determining how an application responds to a client request to a particular endpoint,
// Endpoint => Ex: udemy.com/library

app.use(express.static(__dirname + '/public')); // seta o root como sendo o diretório public para chamada de arquivos estáticos: HTML/CSS, JavaScript

var middleware = (req, res, next) => { // controle e análise de dados da requisição, pode ser usado para transmitir dados entre os requests
    var data = new Date().toString();
    console.log('Requisição no EndPoint: ' + req.url + ' Data/Hora = ' + data);
    next();
}

app.use(middleware); // apontado para o root(), toda a requisição feita será mostrada no log


app.get('/', (req, res) => { // routing com o handler get no endpoint root
    res.send('<h1>Web Sfeerver</h1>'); // o retorno de req = parâmetros para o cliente fazer a requisição e res = parâmetros que serão retornados ao cliente
});

app.get('/bad', (req, res) => {
    res.send({
        message: 'Error' // enviado um objeto como response, o Content-type do response header será application/json
    })
});

app.listen(3000, () => {
    console.log('Server on');
});