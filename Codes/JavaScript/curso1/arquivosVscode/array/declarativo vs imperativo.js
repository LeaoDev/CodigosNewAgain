const aluno = [
    {nome:"marcelo",nota: 7.77},
    {nome:"jose",nota: 8.22}

]



//imperativo

let total1 = 0
for(i = 0; i < aluno.length;i++){
    total1 += aluno[i].nota 
}
console.log(total1 / aluno.length)

//delarativo


const getNota = aluno => aluno.nota
const soma = (atual,total) => total + atual
const total2 = aluno.map(getNota).reduce(soma)