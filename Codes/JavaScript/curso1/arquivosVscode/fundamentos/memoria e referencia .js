const c = {name :'ok1'}
console.log(c)
const b = c // atribuicao por referencia 
b.name  = 'ok2'  
console.log(b)
console.log(c)

// pegar o endereco de memoria e nao o conteudo da variavel //
// alteramos o conteudo do endereco de memoria //
// ou seja , tudo que esta em A passa para B , logo ficara tudo igual , como se fosse a mesma variavel //
// por que passou o endereco de memoria para B ( A igual a  B)//
// assim quando alteramos o conteudo do endereco de memoria de B, alteramos em A tambem //
// pelo falo de ser praticamente a mesma variavel //