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
let currentTotal = 0
// let operator = ''
let previousOperator = ''

function operate(operator, firstValue, secondValue=firstValue){
    if(operator==='+'){
        return add(currentTotal, currentInput)
    }
}

function clearAll(){
    currentInput=0
    currentTotal=0
    previousOperator=''
    displayOnCalculator(0)
}

function displayOnCalculator(val){
    document.querySelector('#resultDisplay').textContent=val
}

function addToCurrentInput(val){
    currentInput+=val
    displayOnCalculator(currentInput)
}

document.querySelector('#buttonContainer').addEventListener('click', event=>{
    target = event.target
    //testing clicks
    // console.log(Array.from(target.classList).includes('operator'))

    //when you click on an operator button
    if(Array.from(target.classList).includes('operator')){
        let currentOperator = target.textContent
        //if there is no previousOperator used
        if(previousOperator===''){
            currentTotal=currentInput
            previousOperator = currentOperator
        }else if(previousOperator==='='){ //if the previous is '='
            displayOnCalculator(currentTotal)
            currentInput=0
        }else{ //if there is a previous operator used
            currentTotal=operate(currentOperator, currentTotal, currentInput)
            displayOnCalculator(currentTotal)
            previousOperator=currentOperator
        }
    }
    //when you click on any digit key
    if(Array.from(target.classList).includes('digit')){
        let digitToAdd = target.textContent
        addToCurrentInput(digitToAdd)
        displayOnCalculator(currentInput)
    }

    if(target.textContent==='Clear'){
        clearAll()
    }
})
