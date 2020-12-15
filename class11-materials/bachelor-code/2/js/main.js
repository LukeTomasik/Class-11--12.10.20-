const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('mouseover', andiNext)
document.querySelector('#claireNext').addEventListener('mouseover', claireNext)
document.querySelector('#sharleenNext').addEventListener('mouseover', sharleenNext)

function andiNext(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}

/*

	add a fun project with classlist property something simple

*/





