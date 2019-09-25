// funcao de alta ordem //
//podemos tratar funcao como um dado,passar uma funcao como parametro , retornar uma funcao ...//


// criar pela  forma fliteral
function fun() { }

// armazenar em uma variavel
const fun2 = function () { }

// armazenar em um arry
const arry = [function (a,c) {return a + c},fun2,fun]
//console.log(arry[0](2,1))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'eae meu bom'}
console.log(obj.falar())

// passar funcao como parametro
function run (fun1) {
    fun1()
}
run(function () {console.log('executando' ) })

//uma funcao pode retorna/conter uma funcao
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(1,2)(1)
const soma2 =  soma(1,1)
soma2(1)
//