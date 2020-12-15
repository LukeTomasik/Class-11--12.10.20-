//Write your pseduo code first! 

let displayResult = document.getElementById('display')
let button = document.getElementById('button')


button.addEventListener('click', temp)

function temp () {
    let value = document.getElementById('form').value
    console.log(value)
    realValue = value * 9/5 + 32
    console.log(realValue)
    displayResult.innerHTML = realValue

}