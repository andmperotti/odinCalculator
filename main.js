function add(a,b){
    return String(Number(a) + Number(b))
}
function subtract(a,b){
    return String(Number(a)-Number(b))
}
function multiply(a,b){
    return String(Number(a)*Number(b))
}
function divide(a,b){
    return String(Number(a)/Number(b))
}
function modulos(a,b){
    return String(Number(a)%Number(b))
}

let currentInput = '0'
let currentTotal = '0'
let previousOperator = ''

function operate(operator, firstValue, secondValue=firstValue){
    if(operator==='+'){
        return add(firstValue, secondValue)
    }else if(operator==='-'){
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

function replaceCurrentTotal(val){
    currentTotal=val
}

function incrementCurrentTotalOneArg(val){
    currentTotal+=val
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

    if(target.id==="signButton"){
        if(currentInput){
            if(currentInput[0]==='-'){
                currentInput=currentInput.substring(1)
                displayOnCalculator(currentInput)
            }else if(currentInput[0]!=='-'){
                currentInput='-'+currentInput
                displayOnCalculator(currentInput)
            }
        }else{
            if(!currentInput&&currentTotal[0]==='-'){
                currentTotal=currentTotal.substring(1)
                displayOnCalculator(currentTotal)
            }else if(!currentInput&&currentTotal[0]!=='-'&&currentTotal!=='0'){
                currentTotal='-'+currentTotal
                displayOnCalculator(currentTotal)
            }
        }
    }

    if(target.textContent==='Back'){
        currentInput=currentInput.substring(0,currentInput.length-1)
        displayOnCalculator(currentInput)
    }

    if(Array.from(target.classList).includes('operator')){
        let operatorPressed = target

        if(operatorPressed.id==='equalsButton' && previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal=0
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            replaceCurrentTotal(
                operate(previousOperator, currentTotal, currentInput)
            )
            currentInput=''
            displayOnCalculator(currentTotal)
            previousOperator=''
        }else if(operatorPressed.id==='equalsButton' && !previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal=0
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentInput){
                replaceCurrentTotal(currentInput)
                displayOnCalculator(currentTotal)
            }else{
                displayOnCalculator(currentTotal)
            }
        }else if(operatorPressed.id!=='equalsButton' && previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal=0
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            replaceCurrentTotal(operate(previousOperator, currentTotal, currentInput))
            currentInput=''
            displayOnCalculator(currentTotal)
            previousOperator=operatorPressed.textContent
        }else if(operatorPressed.id!=='equalsButton' && !previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal=0
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentTotal==='0')
                replaceCurrentTotal(currentInput)
                currentInput=''
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
            }else{
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
            }
        }
    }
)


//Limit the floating point digits... as entry and as return values. 
//Also limit the overall integer length to be displayed...
//can fit 27 integer characters on display