console.log("usando a notacao ponto")


function test(nome) {
    this.nome = nome
    this.teste = function () {
        console.log("usando a funcao teste")
    }    
}

const obj  = new test("testando1")
const obj2 = new test("testando2")
console.log(obj.nome)
console.log(obj2.nome)
obj.teste()