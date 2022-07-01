const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equals')
const allClearButton = document.getElementById('allClear')
const key = document.querySelectorAll('.buttons')
const topScreen = document.getElementById('displayTop')
const bottomScreen = document.getElementById('displayBottom')
const deleteButton = document.getElementById('delete')


function updateBottomDisplay(button) {
    bottomScreen.textContent += button
}

function calculate(num1, num2, operator){
    let value

    switch (operator){
        case '+':
            value = num1+num2
            updateScreens(num1, num2, operator, value)

            break;
        case '–':
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
            topScreen.textContent = value

    }
}

function clear(){
    topScreen.innerText = ''
    bottomScreen.innerText = ''
}


function findOp () {
    let length1 = bottomScreen.textContent.length
    const op = topScreen.innerText.slice(-1)
    let string = topScreen.textContent
    const num1 = parseFloat(string)
    let bottomNumber = bottomScreen.textContent
    const num2 = parseFloat(bottomNumber)
    console.log('3 test')
    console.log(num1)
    console.log(num2)
    console.log(op)
    calculate(num1, num2, op)
    
}

function updateScreens(num1, num2, operator, value) {
    bottomScreen.textContent = ''
    topScreen.textContent = num1.toString() + operator.toString(operator) 
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
    bottomScreen.textContent = ''
    topScreen.textContent= ''
    
})

deleteButton.addEventListener('click', () => {
    bottomScreen.innerText = bottomScreen.textContent.slice(0,-1)

})

equalButton.addEventListener('click', () => {
    findOp()
})

