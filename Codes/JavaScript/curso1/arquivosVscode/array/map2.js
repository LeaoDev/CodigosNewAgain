const carrinho = [
    '{"nome": "papel" , "preco": 3.90}',
    '{"nome": "borracha" , "preco": 4.50}',
    '{"nome": "caneta" , "preco": 5.55}'
]
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(preco)
console.log(resultado)