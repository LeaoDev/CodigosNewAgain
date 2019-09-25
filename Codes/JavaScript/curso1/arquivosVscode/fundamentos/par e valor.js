// par  nome/valor

const  saudacao = 'eae ' // primeiro contexto


function exerc(){
    const saudacao = 'fala meu mano' // segundo contexto 
    return saudacao
}

const cliente = {
    nome: ' Paulo das cruzes ',
    idade: 15,
    altura: 153,
    peso: 98,
    endereco: {
        rua: 'nao sei minha rua',
        logradouro: ' tmb nao sei oq e isso ',
        apartamento:' nunca nem vi'
    }
}
console.log(saudacao)
console.log(exerc())
console.log(cliente)