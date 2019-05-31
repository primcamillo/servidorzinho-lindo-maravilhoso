const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

/* const servidor = http.createServer(function (request, response) {   servidor feito para aulas sem express

        if (request.url === '/') {
            response.end('Hello Word')
        } else if (request.url === '/comidas') {
            if (request.method === 'GET') {
                response.writeHead(200, {
                    "Content-Type": "aplication/json", //"text/html ; charset=utf-8"
                    'Access-Control-Allow-Origin': "*"
                })
                response.write(JSON.stringify(comidas))

                response.end()
            } else if (request.method === 'POST') {
                response.writeHead(201, {
                    "Content-Type": "text/html ; charset=utf-8"
                })
                response.end("<h1>respostão diferentona do post</h1>")
            }
        }
    }) */

const servidor = express()
servidor.use(cors())

servidor.get('/comidas', (request, response) => {
    // response.header('Access-Control-Allow-Origin', '*') //se nao tiver instalado o CORS
    response.send(controller.getAll())
})

servidor.post('/comidas', bodyParser.json(), (request, response) => {
    controller.add(request.body)
    response.send(201)
})

servidor.listen(3000)//valor da porta. usar portas altas a partir do 3000
console.log('servidorzinho iniciado com sucesso')    