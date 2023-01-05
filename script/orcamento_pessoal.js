/*Class que vai receber a despesa*/
class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}


/*Função para cadastro de despesas*/
function cadastrarDespesa(){
    /*recuperando elementos e setando em variaveis para recuperar seus respectivos valores. */
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    /*console.log(ano.value)
    console.log(mes.value)
    console.log(dia.value)
    console.log(tipo.value)
    console.log(descricao.value)
    console.log(valor.value)*/

    /*Passando parametros para construção do objeto */
    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    console.log(despesa)
}