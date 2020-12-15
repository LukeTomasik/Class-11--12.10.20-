const contestants = document.querySelectorAll('h2')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
		soundWave()
	}else{
		alert("Wrong!");
	}
}

soundWave = () => {
	let winner = document.querySelector('#winnerTitle')
	document.querySelector('#displayWinner').classList.toggle('hidden')
	winner.innerHTML = document.querySelector('#nikki').id
}