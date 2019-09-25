//break
const num = [1,2,3,4,5,6,7,8,9,10]
for(i in num){
    if(i == 5){ // para no 5
        break
    }
    console.log(`${i} = ${num[i]}`)
}

//continue
for(x in num){
    if(x == 5) // pula o 5
    continue
    console.log(`${x} = ${num[x]}`)
}