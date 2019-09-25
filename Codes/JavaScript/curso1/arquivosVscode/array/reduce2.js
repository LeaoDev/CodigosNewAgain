const alunos = [
    {nome:'marcelo',nota: 7.7,bolsista:true},
    {nome:'joao',nota: 8.9,bolsista:false},
    {nome:'maria',nota: 6.3,bolsista:true},
    {nome:'jose',nota: 3.2,bolsista:false}
]
//todos sao bolsistas ?
const todos = (resultado,bolsistas) => resultado && bolsistas
console.log("todos sao bolsistas ?")
console.log(alunos.map(a => a.bolsista).reduce(todos))

//alguem em bolsista ?
const alguem = (resultado,bolsista) => resultado || bolsista
console.log("alguem e bolsista ?")
console.log(alunos.map(a => a.bolsista).reduce(alguem))