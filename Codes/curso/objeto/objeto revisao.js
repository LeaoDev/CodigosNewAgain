const produto = new Object
produto.nome = 'Celular'
produto.preco = 1200
produto['marca do produto'] = 'Xiaomi' // nao usaria assim !!
console.log(produto)

delete produto['marca do produto']
delete produto.preco
console.log(produto)


const moto = {
    modelo:'s1000rr',
    marca:'bmw',
    preco: 90000,
    dono: {
        nome:'Marcelo',
        idade: 20,
        endereco:{
            rua:'rua 15 ',
            bairro:'formosinha',
            numero: 15
        }
    },
    condutores: [{
        nome: 'joao',
        idade: 34
    },{
        nome:'Lucas',
        idade: 45
    }],
    verificarIdade: function() {
       /* ... */
    }
}

console.log(moto)
moto.dono.endereco.rua.numero = 132
delete moto.condutores
delete moto.dono.endereco
delete moto.verificarIdade
console.log(moto)
console.log(moto.condutores)
