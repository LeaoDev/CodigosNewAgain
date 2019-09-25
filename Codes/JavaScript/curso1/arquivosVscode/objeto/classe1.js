class Lancamento {
    constructor(nome = 'qualquer', valor = 0) {
        this.nome = nome 
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(a => this.lancamentos.push(a))
    }
    
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(a => {
            valorConsolidado += a.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 50000)
const contaDeLuz = new Lancamento('luz',-500)

const contas = new CicloFinanceiro(6,2019)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())
