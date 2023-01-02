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