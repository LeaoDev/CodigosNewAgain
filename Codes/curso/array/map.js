const numeros = [1, 2, 3, 4, 5]

let fim = numeros.map(e => e * 2)
console.log(fim)

let soma10 = e => e + 10
let mult20 = e => e  * 2
let reais = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let fim2 = numeros.map(soma10).map(mult20).map(reais)
console.log(fim2)