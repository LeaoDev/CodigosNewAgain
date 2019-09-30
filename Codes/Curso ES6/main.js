class List {
    constructor() {
        this.data = []
    }
    add(data) {
        this.data.push(data)
        console.log(this.add)
    }
}




class TodoList extends List{
    
    constructor(){
        super()

        this.usuario = "marcelo"
    }

    mostrausuario(){
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('novo todo')
}
document.getElementById('removetodo').onclick = function(){
    MinhaLista.removeTodo()
}


MinhaLista.mostrausuario()