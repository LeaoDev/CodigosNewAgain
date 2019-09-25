// funcao sem retorno
function imprimirSoma(a , b) {
    let soma = a + b 
    console.log(soma)
}

imprimirSoma(1,2)

// funcao com retorno
function soma(a = 0 , b = 0, c = 0 , d = 0, e = 0){
    return a + b + c + d + e
}
console.log(soma(1,2))