let alunos = ['marcelo','jose','marcos']
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[3])

alunos[3] = 'alguem'
alunos.push('joao')

console.log(alunos[4])
console.log(alunos.length)
console.log(alunos)

alunos.sort()
console.log(alunos)

delete alunos[1]
//metodo splice serve para adicionar remover e alterar tanto no mesmo momento ou nao 
//primenro parametro e o indice segundo paramentro sera a quantidade de elementos que quer  excluir apartir do indice
// terceiro paramento sera para adicionar  o elemento 
alunos = ['algum','alguem','seila11']
alunos.splice(1,1,'elento0')
console.log(alunos)
alunos[9] = '1'
console.log(alunos)
console.log(alunos[8] === undefined)
