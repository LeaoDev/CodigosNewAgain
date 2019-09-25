// pessoa -> 12338454378
const pessoa = {nome: 'Joao '}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 234234
//pessoa = { nome:'ana}

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'sdkjhasdkjh'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)
