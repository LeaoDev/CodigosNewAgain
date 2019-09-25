const funcoes = []

for (var a = 0; a < 10; a++) {
    funcoes.push(function(){
        console.log(a)
    })
    
}
funcoes[2]()
funcoes[8]()
//e passsado o ultimo falor que  esta no FOR(10) , assim ao chamar o arry em posicoes diferentes sera o mesmo resultado