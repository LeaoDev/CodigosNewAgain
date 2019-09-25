const imprimirResultado = function(nota){
    switch(Math.floor(nota)){ /*  math.ceil arredonda para cima, */
        case 10: case 9:     /*  math.floor arredonda para baixo */
            console.log("quadro de honra")
        break

        case 8: case 7: case 6: case 5:
            console.log("aprovado")
        break

        case 4: case 3: case 2: case 1:
            console.log("recuperacao")
        break
        
        default:
            console.log("nota invalida")
    }
}
imprimirResultado(9.5)
imprimirResultado(8.9)
imprimirResultado(1.2)
imprimirResultado(0)
