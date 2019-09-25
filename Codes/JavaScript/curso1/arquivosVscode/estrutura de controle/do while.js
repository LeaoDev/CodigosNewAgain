function aleatorio1(max,min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = aleatorio1(-1,10)
    console.log(`opcao escolhida ${opcao}.`)
}while( opcao != 5)

console.log('end')