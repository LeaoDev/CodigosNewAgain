function aleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0 
//let cont = 0
//let somaAll = 0
while(opcao != 5){
    opcao = aleatorio(-1,10)
    //somaAll = somaAll + opcao 
    //cont++
    console.log(`numero escolhido ${opcao}.`)
}
//console.log(`quantidade de vezes que foi feito o sorteio ${cont}.`)
//console.log(`soma total de todos os numeros sorteados ${somaAll}.`)
console.log('end')