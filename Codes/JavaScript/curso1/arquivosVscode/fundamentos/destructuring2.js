// destructuring com array

const [a] = [10]
console.log(a)

const [numero1, , numero3, , numero5, numero6 = 0] = [ 10 , 7 , 9 , 8]
console.log(numero1,numero3,numero5,numero6)

const [,[,nota]] = [[, 8 , 8], [9 , 6 ,8]]
console.log(nota)