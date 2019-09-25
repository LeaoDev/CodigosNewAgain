{
    {
        {
            {
                {
                    var cons = "sera ???"
                    console.log(cons) //  sendo vista dentro do seu escopo 
                }
            }
        }
    }
}
console.log(cons)// sendo vista fora do seu escopo 
//  var // uma variavel declarada  como var , ela podera ser vista dentro e fora do seu escopo// 

//
function teste(){
    var a = 123
    console.log(a) // sendo vista dentro da sua funcao 
}
teste()
//console.log(a)// nao podera ser vista fora da sua funcao 
// ja dentro de uma funcao,nao e possivel ser vista fora da funcao esta variavel,somente dentro da funcao sera vista
// a variavel.//