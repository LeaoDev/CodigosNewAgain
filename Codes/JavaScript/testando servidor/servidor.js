const http = require('http')
/* if(req.url == '/' ){
    res.end('<h1>The Home</h1>')
}
if(req.url == '/contato'){
    res.end('<h1>The Contato</h1>')
}
if(!req.url != '/' || '/contato'){
    res.end('<h1>Pagina nao existe</h1>')
} */ 

const  server = http.createServer((req,res) =>{
    const resp = []
    resp['/'] = '<h1>The Home</h1>'
    resp['/contato'] = '<h1>The Contato</h1>'
    resp['semURL'] = '<h1>Pagina nao existe</h1>'

    res.end(resp[req.url] || resp['semURL'])
})


server.listen(3001, 'localhost', () => {
    console.log('Servidor de pe em: http://localhost:3001')
    console.log('para desligar o servidor : ctrl + c')
})
