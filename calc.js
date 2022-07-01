const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equals')
const allClearButton = document.getElementById('allClear')
const topScreen = document.getElementById('displayTop')
const bottomScreen = document.getElementById('displayBottom')
const deleteButton = document.getElementById('delete')


function updateBottomDisplay(button) {
    bottomScreen.innerText += button
}

function calculate(num1, num2, operator){
    let value

    switch (operator){
        case '+':
            value = num1+num2
            updateScreens(num1, num2, operator, value)

            break;
        case '-':
            value = num1-num2
            updateScreens(num1, num2, operator, value)
            break;
        case '*':
            value = num1*num2
            updateScreens(num1, num2, operator, value)
            break;
        case '/':
            value = num1/num2
            updateScreens(num1, num2, operator, value)
            break;


        default:
            topScreen.innerText = value

    }
}

function clear(){
    topScreen.innerText = ''
    bottomScreen.innerText = ''
}


function findOp () {
    const op = topScreen.innerText.slice(-1)
    let string = topScreen.innerText
    const num1 = parseFloat(string)
    let bottomNumber = bottomScreen.innerText
    const num2 = parseFloat(bottomNumber)
    console.log('3 test')
    console.log(num1)
    console.log(num2)
    console.log(op)
    calculate(num1, num2, op)
    
}

function updateScreens(num1, num2, operator, value) {
    bottomScreen.innerText = value
    topScreen.innerText = num1.toString() + operator.toString(operator) 
    + num2.toString() + '=' + value.toString()
}

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
        updateBottomDisplay(button.innerText)

})
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateBottomDisplay(button.innerText)
        let text = bottomScreen.innerText
        bottomScreen.innerText=''
        topScreen.innerText = text

    })

})

allClearButton.addEventListener('click', () => {
    bottomScreen.innerText = ''
    topScreen.innerText= ''
    
})

deleteButton.addEventListener('click', () => {
    bottomScreen.innerText = bottomScreen.innerText.slice(0,-1)

})

equalButton.addEventListener('click', () => {
    findOp()
})

