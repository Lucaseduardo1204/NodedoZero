/*import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('oi')
    return response.end()
})

server.listen(3333)*/

import { fastify } from 'fastify' //importa a o miniframework para criação do servidor

const server = fastify() //seta a variavel o qual chamará o framework^

//GET, POST, PUT, DELETE, PATH(faz uma alteração específica de um recurso)

server.post('/videos', () => {
    return 'Hello World'     //Quando o usuário solicitar POST http://localhost:3333/videos ele criará um video
})

server.get('/videos', () => {
    return 'Hello World'     //Quando o usuário solicitar o endereço / (vazio), ira executar a seguinte função, indicada por "=> {}"
})

server.put('/videos/:id', () => {
    return 'Hello World'     //Quando o usuário solicitar PUT http://localhost:3333/videos ele alterará um video recebendo na rota o id do video o qual sera alterado (Route parameter)
})

server.delete('/videos/:id', () => {
    return 'Hello World'     //Quando o usuário solicitar DELETE http://localhost:3333/videos ele excluirá um video recebendo na rota o id do video o qual sera alterado 
})



server.listen({
    port:3333, //cria o objeto port e define a porta o qual o servidor sera inicializado
})