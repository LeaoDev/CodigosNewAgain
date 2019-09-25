function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`area acima do permitido: ${area}`)
    }else{
        return area
    }
}

console.log(area(2,3))
console.log(area(5,3))
console.log(area(5,4))
console.log(area())
console.log(area(5,5))