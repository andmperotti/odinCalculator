function add(a,b){
    return +a + +b
}
function subtract(a,b){
    return +a - +b
}
function multiply(a,b){
    return +a * +b
}
function divide(a,b){
    return +a / +b
}
function modulos(a,b){
    return +a % +b
}

let currentInput = 0
let inputOperator = ''
let currentTotal = 0
let perviousOperator = ''

function operate(operator, valueA, valueB){
    if(operator==="+"){
        currentTotal=add(valueA, valueB)
        perviousOperator = '+'
        displayOnCalculator(currentTotal)
    }else if(operator==="-"){
        currentTotal=subtract(valueA, valueB)
        perviousOperator='-'
        displayOnCalculator(currentTotal)
    }else if(operator==='*'){
        currentTotal=multiply(valueA, valueB)
        perviousOperator='*'
        displayOnCalculator(currentTotal)
    }else if(operator==='/'){
        currentTotal=divide(valueA, valueB)
        perviousOperator='/'
        displayOnCalculator(currentTotal)
    }else if(operator==='%'){
        currentTotal===modulos(valueA, valueB)
        perviousOperator='%'
        displayOnCalculator(currentTotal)
    }
}

function clearAll(){
    firstValue=0
    inputOperator=''
    secondValue=0
    currentTotal=0
    displayOnCalculator(0)
}

//Create a function that populates the display, and apply it to when the user clicks on digit buttons, and after the operate function has been invoked.
function displayOnCalculator(val){
    document.querySelector('#resultDisplay').textContent=val
}

function addToCurrentInput(val){
    currentInput+=val
    displayOnCalculator(currentInput)
}
//Create listeners on the 'buttons' of the calculator to invoke actions.
document.querySelector('#buttonContainer', event=>{
    target = event.target

})









//ec:
//decimal button for making floating point integers, disallow the use of it when it has already been used
//add a backspace button so the user can undo their last input if they clicked the wrong number than they wanted
//add keyboard support

//notes
//round answers with long decimals so they don't overflow the display
//disallow pressing of the = when it doesn't make sense to
//display a snarky error message if the user tries to divide by 0, and of course disallow that from working


//I think the operate function should be called not only when '=' key is pressed but also each time an operator is pressed, that way if there was a running total as the user is typing/pressing integers and then operators continually being pressed then the display will show the running total, not just when '=' is pressed. The difference would be that operate would be invoked with a previous total and with the new input digit and operator.

