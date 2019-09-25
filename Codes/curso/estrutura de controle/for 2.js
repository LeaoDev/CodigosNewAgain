const notas = [2,5,'tg','d',true]

for(i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'marcelo', 
    sobrenome:'leao',
    idade:18,
    peso: '75kg',
    altura:'185cm'
}
for(i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}
