const funcoes = []
for (let c = 0; c < 10; c++) {
    funcoes.push(function(){
        console.log(c)
    })
}
funcoes[2]()
funcoes[8]()
// aqui nao acontece o mesmo  com o VAR, cada um tem o valor que foi passado pelo FOR