// *Variables*
// Create a variable and console log the value
const testOne = 'Here.... im logged!'
// Create a variable, add 10 to it, and alert the value
console.log(testOne)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference 
function subtraction (a,b) {
    let result = a - b
     console.log(result) // replace console.log() with alert ()
}
subtraction(10,5) 
// Create a function that divides one number by another and returns the remainder

function remainder (a,b) {

    let result = a % b
    console.log(result)
}
remainder(20,15)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addition (a,b) {

   let result = a + b
   if (result > 50) {
       console.log('JUMMMMMAAAAANNNNNNJJJJIIIII') // replace console.log with alert()
   } else {
       console.log('Yo dawg..... that aint over 50....')
   }

}
addition(25,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplicationTwitst (a,b,c) {

    let superResult = a * b * c
    if (superResult % 3 === 0) {
        console.log('ZEBRA')
    } else {
    console.log('DO.... you..... even... Zebra?')
    }
} 




