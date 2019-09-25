const produtos = [
    {nome:'notebook',preco: 2500,fragil: true},
    {nome:'celular',preco: 1500,fragil: true},
    {nome:'faca',preco: 30,fragil: false},
    {nome:'bola',preco: 15,fragil: true}
]

const caro = p => p.preco > 1000
const fragil = p => p.fragil
const nome = p => p.nome
const preco = p => p.preco


console.log(produtos.filter(caro).filter(fragil))