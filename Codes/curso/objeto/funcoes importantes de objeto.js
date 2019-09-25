const pessoa = {
    nome: 'marcelo',
    idade: 19
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataN',{
    enumerable: true,
    writable: false,
    value: '11/01/1999'
})
pessoa.dataN = 01
console.log(pessoa)
console.log(Object.keys(pessoa))

//object.assing (ECMAScript 2015)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)