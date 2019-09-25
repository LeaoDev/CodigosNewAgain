function tratarErro(erro){
   throw new Error('deu merda')
   //throw new console.error('deu merda aki rapaz')
   //throw 'deu error'
}

function imprimirMensagemGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Finish')
    }   
}
const obj = { nome:' Marcelo'} // so trocar o ~nome~ para ~name~
imprimirMensagemGritando(obj)
