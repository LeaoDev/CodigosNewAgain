//destructuring passando parameretro para uma funcao 
function rand({min = 0 , max = 1000}){ // usando o dstructuring rand{}
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//console.log(rand({ max: 20, min: 1}))  // usando um objeto {}

// ou
const obj = {max : 20, min: 1}
console.log(rand(obj))
console.log(rand({ min: 500}))
console.log(rand({}))
