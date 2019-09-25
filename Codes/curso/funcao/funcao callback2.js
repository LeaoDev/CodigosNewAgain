const notas = [5.2 ,3.2, 1.2, 5.3 ,7. ,8.2 ,4.1 ,3.9 ,2.2]

// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)
// com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota  => nota < 7)
console.log(notasBaixas3)