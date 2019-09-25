// armazenar uma funcao em uma variavel 
 const imprimirSoma = function( a , b){
    console.log("soma 1") 
    console.log(a + b)
 }

imprimirSoma(2,3)

// armazenar uma funcao arrow em uma variavel
const soma = (a,b) =>{
    console.log("soma 2") 
    return a + b
}
console.log(soma(2,4))

//funcao arron ao quadrado
const aoQuadrado = (a) =>{
    console.log("ao quadrado 1") 
    return a * a
}
console.log(aoQuadrado(5))

// retorno explicito 
const subtracao1 = (a , b) => a - b //maneira de diminuir uma funcao , servirar para  executar uma unica linha de codigo
console.log("subtracao 1") 
console.log(subtracao1(4,3))

// elevar numero ao quadrado 
const elevarQuadrado = (a) => a * a 
console.log("ao quadrado 2")
console.log(elevarQuadrado(4))
