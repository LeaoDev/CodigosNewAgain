//cadeia de prototipos  (prototype chain)
Object.prototype.attr0 = 'E'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho= {__proto__: pai,attr3:'C'}
console.log(filho.attr)

const carro = {
    veloAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.veloAtual + delta <= this.velMax){
            this.veloAtual += delta
        } else{
            this.veloAtual = this.velMax
        }
    },
    status() {
        return `${this.veloAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'sdas',
    velMax: 300 //shadowing // sombreamento
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)


volvo.acelerarMais(150)
console.log(volvo.status())

ferrari.acelerarMais(250)
console.log(ferrari.status())