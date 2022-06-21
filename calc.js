function add (a,b) {
    let sum = (a+b).toFixed(2)
    return sum
}
function subtract (a,b) {
    let diff = (a-b).toFixed(2)
    return diff
}
function multiply (a,b) {
    let product = (a*b).toFixed(2)
    return product
}
function divide(a,b) {
    let quotient = (a/b).toFixed(2)
    return quotient
}
function operate (operator, a, b) {
    return operator(a,b)
}

console.log(operate(divide, 5, 5))

// function makeNumberPad () {
//     let pad = document.querySelector(".number-pad")
//     let size = 9
//     for (let i=0; i<=size; i++){
//         let number = document.createElement('div')
//         number.innerText = i
//         numberPad.appendChild(number).className = 'number-item'
//     }
// }
// makeNumberPad()

