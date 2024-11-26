function add(a,b){
    if(Number(a)%1===0&&Number(b)%1===0){
        return String(Number(a)+Number(b))
    }else{
        return String((Number(a)+Number(b)).toFixed(2))
    }
}

function subtract(a,b){
    if(Number(a)%1===0&&Number(b)%1===0){
        return String(Number(a)-Number(b))
    }else{
        return String((Number(a)-Number(b)).toFixed(2))
    }
}

function multiply(a,b){
    if(Number(a)%1===0&&Number(b)%1===0){
        return String(Number(a)*Number(b))
    }else{ 
        return String((Number(a)*Number(b)).toFixed(2))
    }
}

function divide(a,b){
    if(Number(a)%1===0&&Number(b)%1===0){
        return String(Number(a)/Number(b))
    }else{
        return String((Number(a)/Number(b)).toFixed(2))
    }
}

function modulo(a,b){
    if(Number(a)%1===0&&Number(b)%1===0){
        return String(Number(a)%Number(b))
    }else{
        return String((Number(a)%Number(b)).toFixed(2))
    }
}

let currentInput = ''
let currentTotal = '0'
let previousOperator = ''

function operate(operator, firstValue, secondValue){
    if(operator==='+'){
        return add(firstValue, secondValue)
    }else if(operator==='-'){
        return subtract(firstValue, secondValue)
    }else if(operator==='*'){
        return multiply(firstValue, secondValue)
    }else if(operator==='%'){
        return modulo(firstValue,secondValue)
    }else if(operator==='/'){
        return divide(firstValue, secondValue)
    }
}

function clearAll(){
    currentInput='0'
    currentTotal='0'
    previousOperator=''
    displayOnCalculator(currentTotal)
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
                currentTotal='0'
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentInput.length>0){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentInput)
                )
                currentInput=''
                displayOnCalculator(currentTotal)
                previousOperator=''
            }else if(currentInput.length===0){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentTotal)
                )
                displayOnCalculator(currentTotal)
                previousOperator=''
            }
        }else if(operatorPressed.id==='equalsButton' && !previousOperator){
            if(currentInput){
                replaceCurrentTotal(currentInput)
                currentInput=''
                displayOnCalculator(currentTotal)
            }else{
                displayOnCalculator(currentTotal)
            }
        }else if(operatorPressed.id!=='equalsButton' && previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal='0'
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentInput.length>1){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentInput)
                )
                currentInput=''
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
            }else if(currentInput.length<1){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentTotal)
                )
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
            }
        }else if(operatorPressed.id!=='equalsButton' && !previousOperator){
            if(currentInput.length>0&&currentTotal==='0'){
                replaceCurrentTotal(currentInput)
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
                currentInput=''
            }else if(currentInput.length<1){
                displayOnCalculator(currentTotal)
                previousOperator=operatorPressed.textContent
            }
        }
    }
})

//keyboard support
window.addEventListener("keydown", event=>{
    let numKeys = ['1', '2','3','4','5','6','7','8','9','0']

    if(numKeys.includes(event.key)){
        let digitToAdd = event.key
        addToCurrentInput(digitToAdd)
        displayOnCalculator(currentInput)    
    }

    if(event.key==='.'){
        addToCurrentInput('.')
        displayOnCalculator(currentInput)
    }

    if(event.key==='Escape'){
        clearAll()
    }

    if(event.key==='Backspace'||event.key==="Delete"){
        currentInput=currentInput.substring(0,currentInput.length-1)
        displayOnCalculator(currentInput)
    }
    
    let operatorKeys = ["%", "/", "*", "-", "+", "Enter"]

    if(operatorKeys.includes(event.key)){
        let operatorKeyed = event


        if(operatorKeyed.key==='Enter' && previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal='0'
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentInput.length>0){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentInput)
                )
                currentInput=''
                displayOnCalculator(currentTotal)
                previousOperator=''
            }else if(currentInput.length===0){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentTotal)
                )
                displayOnCalculator(currentTotal)
                previousOperator=''
            }
        }else if(operatorKeyed.key==='Enter' && !previousOperator){
            if(currentInput){
                replaceCurrentTotal(currentInput)
                currentInput=''
                displayOnCalculator(currentTotal)
            }else{
                displayOnCalculator(currentTotal)
            }
        }else if(operatorKeyed.key!=='Enter' && previousOperator){
            if(previousOperator==='/'&&currentInput==='0'){
                currentTotal='0'
                currentInput=''
                displayOnCalculator(`You can't divide by 0`)
                previousOperator=''
            }
            if(currentInput.length>1){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentInput)
                )
                currentInput=''
                displayOnCalculator(currentTotal)
                previousOperator=operatorKeyed.key
            }else if(currentInput.length<1){
                replaceCurrentTotal(
                    operate(previousOperator, currentTotal, currentTotal)
                )
                displayOnCalculator(currentTotal)
                previousOperator=operatorKeyed.key
            }
        }else if(operatorKeyed.key!=='Enter' && !previousOperator){
            if(currentInput.length>0&&currentTotal==='0'){
                replaceCurrentTotal(currentInput)
                displayOnCalculator(currentTotal)
                previousOperator=operatorKeyed.key
                currentInput=''
            }else if(currentInput.length<1){
                displayOnCalculator(currentTotal)
                previousOperator=operatorKeyed.key
            }
        }
       
    }
})


