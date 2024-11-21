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
let currentTotal = 0;
resultDisplay.textContent=currentTotal

let currentInput = null;
//Each time operate is called === update the display to the user.

//round long decimals to a point so they don't overflow the display

//disallow pressing = out of order

//clear button should wipe everything done so far

//if the user tries to divide by 0, display to them a snarky message



//extra credit: add a decimal button that allows users to create floating point numbers, but don't allow more than one
    //add a backspace button, so users can undo their last input 
//add keyboard support