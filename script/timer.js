let sec = 0
let min = 0
let interval
let on


/*Função de incio do cronometro*/
function start() {
	console.log('Cronometro iniciou!')
	on = true
	if(on){
		clearInterval(interval)
		interval  = setInterval(watch,1000)
	}else {
		/*A cada 1 segundo chama a função watch*/
		interval  = setInterval(watch,1000)
	}		
}

/*Função de parada do cronometro*/
function pause() {
	clearInterval(interval)
	console.log('Cronometro pausou!')
}

/*Funação de zerar o cronometro*/
function stop() {
	clearInterval(interval)
	sec = 0
	min = 0
	document.getElementById('watch').innerText = `0${min}:0${sec}`
	console.log('Cronometro parou!')
}

function watch() {
	sec++

	/*Quando contar 60 segundos arecenta um minuto*/
	if(sec==60){
		min++
		sec = 0
	}

	/*Exibe a contegem na tela*/
	if(sec<10 && min<10){
		document.getElementById('watch').innerText = `0${min}:0${sec}`
	}else if(sec<10 && min>=10){
		document.getElementById('watch').innerText = `${min}:0${sec}`
	}else if(sec>=10 && min<10){
		document.getElementById('watch').innerText = `0${min}:${sec}`
	}else if(sec>=10&& min>=10){
		document.getElementById('watch').innerText = `${min}:${sec}`
	}
	
}

/*
Botão(class="btn btn-dark")
Day mode docment.body.className = bg-light text-dark
Botão(class="btn btn-light")
Night mode docment.body.className = bg-dark text-white
*/

function changeStyle() {
	/*Declarando elemento como variavel*/
	let btn_changeStyle = document.getElementById('btn-changeStyle')

	console.log(btn_changeStyle.className)

	if(btn_changeStyle.className === 'btn btn-light'){
		document.body.className = 'bg-light text-dark'
		btn_changeStyle.className = 'btn btn-dark'
		btn_changeStyle.innerText = 'Dark'

	}else if(btn_changeStyle.className === 'btn btn-dark'){
		document.body.className = 'bg-dark text-white'
		btn_changeStyle.className = 'btn btn-light'
		btn_changeStyle.innerText = 'White'
	}
}