function criarProduto(nome,preco,descricao){
    return{
        nome,
        preco,
        descricao
    }
}
console.log(criarProduto('iphone x',1000,"muito caro esse celular"))
console.log(criarProduto('mi 8 pro',2500.99,"celular bom e barato"))