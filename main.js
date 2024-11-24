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

let currentInput = '0'
let currentTotal = '0'
let previousOperator = ''

function operate(operator, firstValue, secondValue=firstValue){
    if(operator==='+'){
        return add(firstValue, secondValue)
    }else if(operator==='='){
        return subtract(firstValue, secondValue)
    }else if(operator==='*'){
        return multiply(firstValue, secondValue)
    }else if(operator==='%'){
        return modulos(firstValue,secondValue)
    }else if(operator==='/'){
        return divide(firstValue, secondValue)
    }
}

function clearAll(){
    currentInput='0'
    currentTotal='0'
    previousOperator=''
    displayOnCalculator(currentInput)
}

function displayOnCalculator(val){
    document.querySelector('#resultDisplay').textContent=val
}

function addToCurrentInput(val){
    if(val==='.' && !currentInput.includes('.')){
        currentInput+='.'
    }else if(currentInput==='0' && val!=='.'){
        currentInput=val
    }else if(val!=='.'){
        currentInput+=val
    }
}

document.querySelector('#buttonContainer').addEventListener('click', event=>{
    target = event.target

    if(Array.from(target.classList).includes('digit')){
        let digitToAdd = target.textContent
        addToCurrentInput(digitToAdd)
        displayOnCalculator(currentInput)    
    }

    if(target.id==='decimalButton'){
        addToCurrentInput('.')
        displayOnCalculator(currentInput)
    }

    if(target.textContent==='Clear'){
        clearAll()
    }

    if(target.id="signButton"){
        if(currentInput[0]==='-'){
            currentInput=currentInput.substring(1)
            displayOnCalculator(currentInput)
        }else if(currentInput[0]!=='-'){
            currentInput='-'+currentInput
            displayOnCalculator(currentInput)
        }
    }

    if(target.textContent==='Back'){
        currentInput=currentInput.substring(0,currentInput.length-1)
        displayOnCalculator(currentInput)
    }

    //when you click on an operator button
    if(Array.from(target.classList).includes('operator')){
        let currentOperator = target.textContent

    }
})
