document.querySelector('#yell').addEventListener('click', run)



function run() {
  const noun = document.querySelector('#noun').value
  const person = document.querySelector('#person').value
  const verb = document.querySelector('#verb').value
  const color = document.querySelector('#color').value
  const adjective = document.querySelector('#adjective').value
  const holiday = document.querySelector('#holiday').value
  const vegetable = document.querySelector('#vegetable').value




/*
        const fName = document.querySelector('#firstName').value
        const fMidName = document.querySelector('#firstMiddle').value
        const lMidName = document.querySelector('#lastMiddle').value
        const lName = document.querySelector('#lastName').value

        document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

        Add what you should be doing - conditionals go here

        let getResult =document.querySelector('#placeToYell') 
        getResult.innerText = `${fName} ${fMidName} ${lMidName} ${lName}`

*/
// Dom for Madlib Selectors in an object

  let nounResult = document.querySelectorAll('.noun')
  let personResult = document.querySelectorAll('.person') //2
  let verbResult = document.querySelectorAll('.verb') //4
  let colorResult = document.querySelectorAll('.color') //3
  let adjectiveResult = document.querySelectorAll('.adjective')   
  let holidayResult = document.querySelector('.holiday') 
  let vegetableResult = document.querySelectorAll('.vegetable')
 
// targets/changes html Content
  nounResult[0].innerHTML = noun
  nounResult[1].innerHTML = noun

  personResult[0].innerHTML = person  
  personResult[1].innerHTML = person

  verbResult[0].innerHTML = verb
  verbResult[1].innerHTML = verb
  verbResult[2].innerHTML = verb
  verbResult[3].innerHTML = verb
  verbResult[4].innerHTML = verb

  colorResult[0].innerHTML = color
  colorResult[1].innerHTML = color
  colorResult[2].innerHTML = color
  
  
  adjectiveResult[0].innerHTML = adjective
  adjectiveResult[1].innerHTML = adjective

  vegetableResult[0].innerHTML = vegetable

  holidayResult.innerHTML = holiday




}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }
