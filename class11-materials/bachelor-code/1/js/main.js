document.querySelector('#finalRose').addEventListener('click', displayWinner)
let nikki = document.querySelector('#nikki')




function displayWinner () {
	document.querySelector('#claire').style.display = 'none'
	nikki.classList.toggle('active')
	document.querySelector('#sharleen').style.display= 'none'
}