const elementos = ['terra','fogo','ar','agua']
console.log(elementos)

elementos.push('fumaca')//adiciona um elemento no final do array
console.log(elementos)
elementos.pop()//remove o ultimo elemento do array
console.log(elementos)
elementos.shift()//remove o primeiro elemento do array
console.log(elementos)
elementos.unshift('cimento')//adiciona um elemento no indice 0 do array
console.log(elementos)

//splice pode remover e adicionar elementos

//adiconar
elementos.splice(1,0,'areia','brita')
console.log(elementos)

//remover
elementos.splice(0,1)
console.log(elementos)

const algunsElementos = elementos.slice(1)//retorna um novo array apartir do elemento passado
console.log(algunsElementos)