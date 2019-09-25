// object.preventExtensions
//previne  de adicionar mais atributos ao objeto

const produto = Object.preventExtensions({
    nome:'tv 42 inc', preco: 1000.99 , descricao:' boa e barata'
})
// verificar  se o objeto  foi criado com o preventExtensions //
console.log('extensivel:', Object.isExtensible(produto)) 

console.log(produto)

produto.nome = ' celular'
produto.preco = 500.25
produto.desconto = 100.00
delete produto.descricao

console.log(produto)

//object.seal 
//selando o objeto , pode modificar os atributos que estao no objeto porem nao pode excluir nem adicionar novos

const pessoa = {nome: 'marcelo', idade: 16}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.nome = 'jose'
pessoa.sobrenome = 'oliveira'
delete pessoa.idade
console.log(pessoa)

//object.freeze  
// um objeto constante nao pode modificar adicionar ou remover atributos  ( selado + constante)
