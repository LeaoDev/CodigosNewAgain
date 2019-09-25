let undefin 
console.log(undefin) //   nao foi denido um valor para a variavel


let nulll = null
console.log(nulll) // foi definida um valor mas so que vazio , nao aponta para nada 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 1.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)