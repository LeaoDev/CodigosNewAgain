function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('jose')
const p2 = new Pessoa('Marcelo')
p1.falar()
p2.falar()