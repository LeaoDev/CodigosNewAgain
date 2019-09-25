Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}


const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log("quadro de honra ",nota)
    }else if(nota.entre(7,8.9)){
        console.log("aprovado ",nota)
    }else if(nota.entre(0,6.9)){  /* so para testar  */
        console.log("reprovado ",nota)
    }else{
        console.log("nota invalida")
    }   
}           
imprimirResultado(7.5)