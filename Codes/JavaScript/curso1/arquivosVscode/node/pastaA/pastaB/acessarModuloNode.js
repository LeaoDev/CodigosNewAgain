const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req,res) =>{
    res.write('primeiro teste ')
    res.end()
}).listen(8080)
