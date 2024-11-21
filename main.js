function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function modulos(a,b){
    return a%b
}

function operate(firstNum, operator, secondNum){
    if(operator==='+'){
        add(firstNum,secondNum)
    }else if(operator==='-'){
        subtract(firstNum,secondNum)
    }else if(operator==='*'){
        multiply(firstNum,secondNum)
    }else if(operator==='/'){
        divide(firstNum,secondNum)
    }
}
//If I recall correctly from the past doing this exercise in other courses there is a way to use an object to store functions and then call on them from that object...


//create functions that run the operations (listeners) and place the results into the display of the calculator. 
//Don't forget to save the output as a variable as it will be usable with any proceeding operations. ex 1+1-2, 1+1 needs to be solved and displayed as they hit + and then 2 and then that total needs to display
let resultDisplay = document.querySelector('#resultDisplay')
let currentTotal = 0
resultDisplay.textContent=currentTotal

let currentInput = '';
let lastOperator = ';'

let operateButton = document.querySelector('#operateButton')
let backButton = document.querySelector('#backButton')
let clearButton = document.querySelector('#clearButton')
let signButton = document.querySelector('#signButton')
let modulosButton = document.querySelector('#modulosButton')
let divideButton = document.querySelector('#divideButton')
let multiplyButton = document.querySelector('#multiplyButton')
let subtractButton = document.querySelector('#subtractButton')
let addButton = document.querySelector('#addButton')

let sevenButton = document.querySelector('#sevenButton')
let eightButton = document.querySelector('#eightButton')
let nineButton = document.querySelector('#nineButton')
let fourButton = document.querySelector('#fourButton')
let fiveButton = document.querySelector('#fiveButton')
let sixButton = document.querySelector('#sixButton')
let oneButton = document.querySelector('#oneButton')
let twoButton = document.querySelector('#twoButton')
let threeButton = document.querySelector('#threeButton')
let decimalButton = document.querySelector('#decimalButton')
let zeroButton = document.querySelector('#zeroButton')

//^ try to use event delegation to instead listen on the parent and use e.target instead of defining these almost 20 variables above
let buttonContainer = document.querySelector('#buttonContainer')
buttonContainer.addEventListener('click', e=>{
    let target = e.target

    switch(target.id){
        case 'addButton':
            currentInput=Number(currentInput)
            let addResult = add(currentTotal, currentInput);
            resultDisplay.textContent=Number(addResult);
            currentTotal = addResult;
            lastOperator='+'
            break;
        case 'subtractButton':
            currentInput=Number(currentInput)
            let subtractResult = subtract(currentTotal, currentInput);
            resultDisplay.textContent=subtractResult;
            currentTotal=subtractResult;
            lastOperator='-'
            break;
        case 'multiplyButton':
            currentInput=Number(currentInput)
            let multiplyResult = multiply(currentTotal, currentInput);
            resultDisplay.textContent=multiplyResult;
            currentTotal = multiplyResult;
            lastOperator='*'
            break;
        case 'divideButton':
            currentInput=Number(currentInput)
            let divideResult = divide(currentTotal, currentInput);
            resultDisplay.textContent=divideResult;
            currentTotal=divideResult;
            lastOperator='/'
            break;
        case 'modulosButton':
            currentInput=Number(currentInput)
            let modulosResult = modulos(currentTotal, currentInput);
            resultDisplay.textContent=modulosResult;
            currentTotal = modulosResult;
            lastOperator='%'
            break;
        case 'signButton':
            currentInput=Number(currentInput)
            if(Math.sign(currentInput)>0){
                currentInput=-currentInput
            }else if(Math.sign(currentInput)<0){
                currentInput=+currentInput
            }
            break;
        case 'clearButton':
            currentInput=0;
            break;
        case 'backButton':
            currentInput=currentInput.substring(0,-1);
            break;
        case 'operateButton':
            currentInput=Number(currentInput)
            let totalResult = operate(currentTotal, lastOperator, currentInput)
            resultDisplay.textContent=totalResult
            currentInput='0'

    }

    switch(target.id){
        case 'oneButton':
            currentInput+='1';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'twoButton':
            currentInput+='2';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'threeButton':
            currentInput+='3';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'fourButton':
            currentInput+='4';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'fiveButton':
            currentInput+='5';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'sixButton':
            currentInput+='6';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'sevenButton':
            currentInput+='7';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'eightButton':
            currentInput+='8';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'nineButton':
            currentInput+='9';
            resultDisplay.textContent=Number(currentInput);
            break;
        case 'zeroButton':
            currentInput+='0';
            resultDisplay.textContent=Number(currentInput);
            break;
    }
})







//Each time operate is called === update the display to the user.

//round long decimals to a point so they don't overflow the display

//disallow pressing = out of order

//clear button should wipe everything done so far

//if the user tries to divide by 0, display to them a snarky message



//extra credit: add a decimal button that allows users to create floating point numbers, but don't allow more than one
    //add a backspace button, so users can undo their last input 
//add keyboard support