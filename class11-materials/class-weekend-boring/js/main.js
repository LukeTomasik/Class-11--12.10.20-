
document.querySelector('#check').addEventListener('click', bob )

let age = document.querySelector('#check').innerHTML

// .section  # section
let website = document.querySelector('#check')










website.addEventListener('click', storage)


let bucket = 10

let bucketTwenty = 20

// function storage() {

  let container = bucket + bucketTwenty 

function storage() {

    let container = bucket + bucketTwenty 
    let mainResult = container + 50
    
  }










let displayValue = document.getElementById('placeToSee')
let displayVideoOne = document.getElementById('classTime')
let displayVideoTwo = document.getElementById('monday')




function bob() {




  let day = document.querySelector('#day').value
 
  let correctDay = day.toLowerCase()
  // console.log(day, displayValue)
  // //Conditionals go here

  if (correctDay === 'thursday' || correctDay === 'tuesday') {
    displayValue.innerText = `It's ${day} of course its Motha-Fuckin Class Time Baby!!`
    displayVideoOne.style.display = 'block'
  } else if (correctDay === 'monday') {
    displayValue.innerText = `Mondays...I understand... little man....`
    displayVideoTwo.style.display = 'block'
  } else if (correctDay === 'wednesday') {
    displayValue.innerText = `${day}... we be grindin code in between!`
  } else if (correctDay === 'friday') {
    displayValue.innerText = `${day}... we party... coding Yall!!`

  } else if (correctDay === 'saturday') {
    displayValue.innerText = `${day}s... are for the Boys!!`
  } else if (correctDay === 'sunday') {
    displayValue.innerText = `${day}.. funday... Day[9] anyone?`
  } else {
    console.log('you don fucked up A-aaron')
    
  }

}
