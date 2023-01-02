function calcular() {
	/*Receber valores de entradas*/
	var preco_gasolina = document.getElementById('gasolina_preco').value.replace(",",".")
	var preco_etanol = document.getElementById('etanol_preco').value.replace(",",".")

	/*console.log(preco_gasolina)
	console.log(preco_etanol)*/

	/*Limpar os campos*/
	document.getElementById("gasolina_preco").value = ''
	document.getElementById("etanol_preco").value = ''


	if(preco_gasolina != '' && preco_etanol != ''){
		/*Transformando valor recebido em numero*/
		preco_gasolina = parseFloat(preco_gasolina)
		preco_etanol = parseFloat(preco_etanol)

		/*console.log(preco_gasolina)
		console.log(preco_etanol)*/


		/*Executar calculo*/
		var aux = (preco_etanol/preco_gasolina)*10

		console.log(aux)

		/*Criando elemento*/
		let resultado = document.createElement('div')

		/*Adicionando classes*/
		resultado.className = 'absolute'

		/*Adicionando Id*/
		resultado.id = 'resposta'

		/*Adicionando elemento no body*/
		document.body.appendChild(resultado)

		/*Criando elemento span dentro da div*/
		let msg = document.createElement('span')
		msg.id = 'msg'
		resposta.appendChild(msg)	
		
		/*De acordo com resultado exibir a resposta*/
		if(aux>7){
			/*Tornar resultado visivel*/
			document.getElementById('msg').textContent = "Gasolina é a melhor opção!"

		}else {
			/*Tornar resultado visivel*/
			document.getElementById('msg').textContent = "Etanol é a melhor opção!"
		}

		/*Criando botão voltar*/
		let voltar = document.createElement('button')
		voltar.onclick = function () {
			/*Voltar pra tela inicial*/
			let res = document.getElementById('resposta')
			res.remove()
		}
		voltar.type = 'button'
		voltar.className = 'btn btn-success voltar'
		voltar.id = 'voltar'
		voltar.textContent = 'Voltar'
		resposta.appendChild(voltar)


	} else {
		/*Caso um dos campos esteja vazio é retornado a seguinte mensagem*/
		alert("Por favor digite um valor!")
		}

	
}

