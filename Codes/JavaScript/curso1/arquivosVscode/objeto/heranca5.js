function Aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('ola',1)
const aula2 = new Aula('flw',2)

console.log(aula1)
console.log(aula2)



//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo (Aula,'ola1',3)
const aula4 = novo (Aula,'flw2',4)

console.log(aula3)
console.log(aula4)