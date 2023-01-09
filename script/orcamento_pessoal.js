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

    validarDados(){
        //Validando campos do objeot
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

/*Classe para receber objetos instanciados */
class BD {

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null) {
            localStorage.setItem('id',0)
        }
    }

    getProximoId(){
        /*Método para alterar o Id */
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
         let id = this.getProximoId()
         localStorage.setItem('id',id)
        /*Usando steItem para passar o nome do objeto e prodprio 
        objeton em JSON*/
        /*Usando JSON.stringfy para transformar objeito em um JSOSN valido */
        localStorage.setItem(id, JSON.stringify(d))
        console.log(d)
    }

    recuperarTodosRegistros(){
        //array de despesas
        let despesas = Array()

        
        let id = localStorage.getItem('id')
        //Recuperar todas as despesas em LocalStorage
        for(let i = 1; i <= id; i++){

            //recuperar a despesa
            //transformando JSON em objeto JavaScript
            let despesa = JSON.parse(localStorage.getItem(i))
           
            //pular indices que foram removidos
            if(despesa === null){
                continue
            }

            //adicionando objeito no array 
            despesas.push(despesa)

        }
        return despesas
    }
}

/*Gravando objeto no Local Storage */ 
let bd = new BD  

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


    //Recuperando elementos da Janela de resposta do registro
    let modal = document.getElementById('modal')
    let titleModal = document.getElementById('exampleModalLabel')
    let textModal = document.getElementById('text')
    let btnModal = document.getElementById('btn_modal')

    //Caso a validação retorne true os dados serão gravados
    if(despesa.validarDados()){
        bd.gravar(despesa)

        //Editando atributos da tela de resposta do registro
        modal.className = 'modal-header text-success'
        titleModal.textContent = 'Registro inserido com sucesso.'
        textModal.textContent = 'Despesa gravada.'
        btnModal.className = 'btn btn-success'
        btnModal.textContent = 'Voltar'

        //Função JQUERY com BootStrap para exibir elemento usando ID
        $('#record').modal('show')
    }else {
        modal.className = 'modal-header text-danger'
        titleModal.textContent = 'Erro na gravação.'
        textModal.textContent = 'Existem campos obrigatórios que não foram preenchidos.'
        btnModal.className = 'btn btn-danger'
        btnModal.textContent = 'Voltar e corrigir'

        $('#record').modal('show')
    }
    
}

//Exibir registros gravados na pagina consulta
//Função serar chamada pelo onload do elemento body na pagina consiltas(assim que a pagina for aberta no navegador)
function carregaListaDespesa(params) {
    //recebendo array criado pelo método
    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()
    console.log(despesas)
}




