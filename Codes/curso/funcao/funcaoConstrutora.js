function Carro(velocidadeMaxima = 200, delta = 5){ // usando os valores padroes da funcao
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico 
    this.acelerar = function (){
        if(velocidadeAtual < velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno  = new Carro // usando os valores padroes da funcao 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20) // dando valores para a funcao 
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())