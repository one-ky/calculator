function operate (num1, num2, operator) {
    let value
    switch(operator) {
        case "+":
            value = parseFloat(num1) + parseFloat(num2)
            break
        case "-":
            value = parseFloat(num1) - parseFloat(num2)
            break
            
        case "*":
            value = parseFloat(num1) - parseFloat(num2)
            break

        case "/":
            value = parseFloat(num1) - parseFloat(num2)
            break  
    }
    return value
}


function clearAll(){

}

function deleteLast(){

}

function equals(){

}

function updateScreen(currentInput){
        

}

const digitButton = document.querySelectorAll('.digit')
const operatorButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equalsOperator')
const delButton = document.querySelector('.delOperator')
const clearButton = document.querySelector('.clearOperator')


digitButton.forEach(button => {
    button.addEventListener('click', () => {

    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {

    })
})

