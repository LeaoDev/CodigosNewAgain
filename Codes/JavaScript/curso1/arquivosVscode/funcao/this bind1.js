const pessoa = {
    saudacoes: 'bom dia',
    falar(){
        console.log(this.saudacoes)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()// conflito entre  paradigmas funcional e OO // this.falar apanto para o dono no momento 
       // porem quando joga dentro de una variavel ela para de apontar para o dono

//como resolver o this
const falaDePessoa = pessoa.falar.bind(pessoa)// o this sempre ira funcinar com o parametro que passar para o bind
falaDePessoa()// aqui ela volta a apontar para o this
