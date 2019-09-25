class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('jose')
p1.falar()

const pessoa = nome => {
    return{
        falar:() => console.log(`meu nome e ${nome}`)
    }
}

const p2 = pessoa('marcelo')
p2.falar()