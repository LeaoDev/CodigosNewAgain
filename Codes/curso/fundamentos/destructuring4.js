//destructuring com  array passando em uma funcao
function rand ([min = 0 , max = 1000]){
    if(min > max){
        [min , max] = [max , min]
    }    
        const valor = Math.random() * (max - min) + min 
        return Math.floor(valor)   
}
//formas de pegar os numeros
console.log(rand([50,20]))
console.log(rand([500]))
console.log(rand([,900]))
console.log(rand([]))