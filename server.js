const http = require('http')
const comidas = {

    pratosFavoritos: [
        {
            "nome": "Batata frita",
            "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
            "imagem": "img/Batata-frita.jpg"
        },
        {
            "nome": "Macarronada",
            "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
            "imagem": "img/macarronada.jpg"
        },
        {
            "nome": "Falafel",
            "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
            "imagem": "img/falafel.jpg"
        },
        {
            "nome": "Creme de abóbora",
            "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
            "imagem": "img/creme-de-abobora.jpg"
        },
    ]}

const servidor = http.createServer(function (request, response) {

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
    })


servidor.listen(3000)//valor da porta. usar portas altas a partir do 3000
console.log('servidorzinho iniciado com sucesso')    