console.log(soma(2,4))
// function declaration 
// mais usada 
function soma ( x, y ){
    return x + y
}

//functio expression
// mais usada 
const sub = function(x,y) {
    return x - y
}
console.log(sub(4,1))
// named function expression
//pouco usada , boa pada fazaer debug
const mult  = function mult(x,y){
    return x * y
}
console.log(mult(2,4))