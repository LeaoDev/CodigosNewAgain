// usando notacao literal
const obj1 = {}
console.log(obj1)

// Object JS
console.log(typeof Object , typeof new Object)
const obj2 = new Object

console.log(obj2)

// funcao construtora

function Produto(nome,preco,desconto) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('celular',2929,0.12)
const p2 = new Produto('mesa',1999,0.23)

console.log(p1.getDesconto(),p2.getDesconto())

// funcao factory
function Celular(nome,preco,) {
    return{
        nome,
        preco,
        getDescontoCelular() {
            return preco * (1 - 0.25)
        } 
    }
}

const f1 = new Celular('xiaomi mi a2',1999)
const f2 = new Celular('iphone',5321,99)
console.log(f1.getDescontoCelular(),f2.getDescontoCelular())

// object.create
const filha  = Object.create(null)
filha.nome = 'Marcelo'
console.log(filha)

// funcao famosa que retorna objeto

const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)