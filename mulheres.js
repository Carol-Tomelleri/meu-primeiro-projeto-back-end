const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Caroline Tomeleri',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHHNZc-unrvwg/profile-displayphoto-shrink_800_800/0/1678700776071?e=2147483647&v=beta&t=eh9HRKIXQlWdHQdHpC_TP5vlPVRI8O5RncEfre17pUY',
        minibio: 'Assistente administrativo'
    },
    {
        nome: 'Josiane Tomeleri',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHHNZc-unrvwg/profile-displayphoto-shrink_800_800/0/1678700776071?e=2147483647&v=beta&t=eh9HRKIXQlWdHQdHpC_TP5vlPVRI8O5RncEfre17pUY',
        minibio: 'mãe'
    },
    {
        nome: 'Silvana de Jesus',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHHNZc-unrvwg/profile-displayphoto-shrink_800_800/0/1678700776071?e=2147483647&v=beta&t=eh9HRKIXQlWdHQdHpC_TP5vlPVRI8O5RncEfre17pUY',
        minibio: 'amiga'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)