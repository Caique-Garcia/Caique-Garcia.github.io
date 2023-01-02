/*Função recebe um tipo de ação de acordo com a tecla pressionada e um valor pressionado */
function calcular(tipo,valor) {
	
	if(tipo === 'acao'){

		if(valor === 'c'){
			/*Limpas os valores exibidos*/
			document.getElementById('resultado').value = ''
		}

		if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
			/*Contacatenas os carecteres de sinais recebidos com os valores*/
			document.getElementById('resultado').value += valor
		}

		if(valor === '='){
			/*função eval lê string e soma como expreção numerica*/
			var valor_campo = eval(document.getElementById('resultado').value)
			/*Exibe o resultado*/
			document.getElementById('resultado').value = valor_campo
		}

	}else if(tipo === 'valor'){

		/*Concatena os valores na tela da calculadora*/
		/*já que que os valores são recebisdos como string */
		document.getElementById('resultado').value += valor

	}

}