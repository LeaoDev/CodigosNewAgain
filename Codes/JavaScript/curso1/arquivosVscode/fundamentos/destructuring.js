// novo recurso do ES

const pessoa = {
    nome: 'jose da silva',
    idade: 32,
    endereco:' nao sei onde mora ',
    numero:1111
}


const {nome: n , idade: i} = pessoa
console.log(n,i)

const { cep , tempo} = pessoa
console.log(cep,tempo)


