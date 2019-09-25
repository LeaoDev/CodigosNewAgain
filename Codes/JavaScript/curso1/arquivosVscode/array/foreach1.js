const pessoas = ['marcelo','jose','luana','leona']

pessoas.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

pessoas.forEach( nome => console.log(nome))
