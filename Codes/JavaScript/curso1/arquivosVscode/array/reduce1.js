const alunos = [
    {nome:'marcelo',nota: 7.7,bolsista:true},
    {nome:'joao',nota: 8.9,bolsista:false},
    {nome:'maria',nota: 6.3,bolsista:true},
    {nome:'jose',nota: 3.2,bolsista:false}
]

const resultado = alunos.map(a  => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},10)