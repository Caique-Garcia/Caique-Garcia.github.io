/*Mudando tema da pagina*/
function changeStyle() {
	/*Declarando elemento como variavel*/
	let btn_changeStyle = document.getElementById('btn-changeStyle')
	let navBar = document.getElementById('navBar')

	console.log(btn_changeStyle.className)
	console.log(navBar.className)

	if(btn_changeStyle.className === 'btn btn-light m-2 position-absolute top-0 end-0'){
		document.body.className = 'bg-light text-dark'
		navBar.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-top'
		btn_changeStyle.className = 'btn btn-dark m-2 position-absolute top-0 end-0'
		btn_changeStyle.innerText = 'Dark'

	}else if(btn_changeStyle.className === 'btn btn-dark m-2 position-absolute top-0 end-0'){
		document.body.className = 'bg-dark text-white'
		navBar.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
		btn_changeStyle.className = 'btn btn-light m-2 position-absolute top-0 end-0'
		btn_changeStyle.innerText = 'Light'
	}
}

/*Melhorando responsividade*/
let largura
let areaPrincipal = document.getElementById('area_principal')
let colunaVazia = document.getElementById('colunaVazia')
let colAstronauta = document.getElementById('colAstronauta')

function ajusta() {
	/*Encontrando largura pagina*/
	largura = window.innerWidth
	console.log(largura)
	if(largura<767){
		areaPrincipal.className = 'col m-auto align-self-center'
	}else{
		areaPrincipal.className = 'col-7'
	}
}	

