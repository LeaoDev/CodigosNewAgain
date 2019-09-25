function compras(trabalho1,trabalho2) {
    const VaiComprarSorvete = trabalho1 || trabalho2
    const VaiComprarTv50    = trabalho1 && trabalho2
    const VaiComprarTv32    = trabalho1 != trabalho2 
    const VaiSerSaudavel    = !VaiComprarSorvete // operador unario
    //const VaiComprarTv32 = !!(trabalho1 ^ trabalho2) // ou exclusivo bitwise bit a bit
    return {VaiComprarSorvete, VaiComprarTv50, VaiComprarTv32,VaiSerSaudavel }
} 

console.log(compras(true,true))

console.log(compras(true,false))

console.log(compras(false,true))

console.log(compras(false,false))









