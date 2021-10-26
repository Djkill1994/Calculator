const dataInput = document.querySelector('.data-input');
const gridTable = document.querySelector('.grid');
const plusOperator = document.querySelector('#plus');
const minusOperator = document.querySelector('#minus');
const divisionOperator = document.querySelector('#division');
const multiplyOperator = document.querySelector('#multiplication');
const equalsOperator = document.querySelector('#equals');
const acOperator = document.querySelector('#ac');
const addingMinus = document.querySelector('#add-minus');
const interestOperator = document.querySelector('#interest');
let pointEntry = document.querySelector('#point');

let fontSize = 90;
let fistNumber;
let secondNumber;
let result;

const NUMBER_OPERATORS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function operatorsRefresh (){
    plusOperator.style.backgroundColor = 'rgba(254,159,11,1)';
    plusOperator.style.color = 'white';
    minusOperator.style.backgroundColor = 'rgba(254,159,11,1)';
    minusOperator.style.color = 'white';
    divisionOperator.style.backgroundColor = 'rgba(254,159,11,1)';
    divisionOperator.style.color = 'white';
    multiplyOperator.style.backgroundColor = 'rgba(254,159,11,1)';
    multiplyOperator.style.color = 'white';
}

function ac() {
    result = 0;
    fistNumber = 0;
    secondNumber = 0;
    dataInput.innerHTML = '0';
    dataInput.style.fontSize = 90 + 'px';
    operatorsRefresh()
}

function interest(){
    let interestResult = +fistNumber / 100 * +secondNumber;
    result = +fistNumber - interestResult;
    dataInput.innerHTML = result;
}

function addingMinusToDataInput(){


    dataInput.innerHTML = '-' + dataInput.innerHTML;
}

function plus() {
    fistNumber = dataInput.innerHTML
    if (divisionOperator.style.backgroundColor || minusOperator.style.backgroundColor ||
        multiplyOperator.style.backgroundColor === 'white' ) {
        divisionOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        divisionOperator.style.color = 'white'
        minusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        minusOperator.style.color = 'white'
        multiplyOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        multiplyOperator.style.color = 'white'
        plusOperator.style.backgroundColor = 'white'
        plusOperator.style.color = 'rgba(254,159,11,1)'
    } else {
        plusOperator.style.backgroundColor = 'white';
        plusOperator.style.color = 'rgba(254,159,11,1)';
    }
    dataInput.innerHTML = ''
    dataInput.style.fontSize = 90 + 'px';
}

function minus() {
    fistNumber = dataInput.innerHTML
    if (plusOperator.style.backgroundColor || divisionOperator.style.backgroundColor ||
        multiplyOperator.style.backgroundColor === 'white' ) {
        plusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        plusOperator.style.color = 'white'
        divisionOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        divisionOperator.style.color = 'white'
        multiplyOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        multiplyOperator.style.color = 'white'
        minusOperator.style.backgroundColor = 'white'
        minusOperator.style.color = 'rgba(254,159,11,1)'
    } else {
        minusOperator.style.backgroundColor = 'white';
        minusOperator.style.color = 'rgba(254,159,11,1)';
    }
    dataInput.innerHTML = ''
    dataInput.style.fontSize = 90 + 'px';
}

function division (){
    fistNumber = dataInput.innerHTML
    if (plusOperator.style.backgroundColor || minusOperator.style.backgroundColor ||
        multiplyOperator.style.backgroundColor === 'white' ) {
        plusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        plusOperator.style.color = 'white'
        minusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        minusOperator.style.color = 'white'
        multiplyOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        multiplyOperator.style.color = 'white'
        divisionOperator.style.backgroundColor = 'white'
        divisionOperator.style.color = 'rgba(254,159,11,1)'
    } else {
        divisionOperator.style.backgroundColor = 'white';
        divisionOperator.style.color = 'rgba(254,159,11,1)';
    }
    dataInput.innerHTML = ''
    dataInput.style.fontSize = 90 + 'px';
}

function multiply (){
    fistNumber = dataInput.innerHTML
    if (plusOperator.style.backgroundColor || minusOperator.style.backgroundColor ||
        divisionOperator.style.backgroundColor === 'white' ) {
        plusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        plusOperator.style.color = 'white'
        minusOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        minusOperator.style.color = 'white'
        divisionOperator.style.backgroundColor = 'rgba(254,159,11,1)'
        divisionOperator.style.color = 'white'
        multiplyOperator.style.backgroundColor = 'white'
        multiplyOperator.style.color = 'rgba(254,159,11,1)'
    } else {
        multiplyOperator.style.backgroundColor = 'white';
        multiplyOperator.style.color = 'rgba(254,159,11,1)';
    }
    dataInput.innerHTML = ''
    dataInput.style.fontSize = 90 + 'px';
}

function equals() {
    if (plusOperator.style.backgroundColor === 'white') {
        result = +fistNumber + +secondNumber;
        dataInput.innerHTML = result;
    } else if (minusOperator.style.backgroundColor === 'white') {
        result = +fistNumber - +secondNumber;
        dataInput.innerHTML = result;
    }else if (divisionOperator.style.backgroundColor === 'white'){
        result = +fistNumber / +secondNumber;
        dataInput.innerHTML = result;
    }else if (multiplyOperator.style.backgroundColor === 'white'){
        result = +fistNumber * +secondNumber;
        dataInput.innerHTML = result;
    }
    fontSizeToNumber()
    operatorsRefresh()
}

function addingPoint (){
    if (dataInput.innerHTML === '0'|| dataInput.innerHTML === ''){
        dataInput.innerHTML = '0.'
    }else if (dataInput.innerHTML.endsWith('.') === true){
        dataInput.innerHTML
    }else if (NUMBER_OPERATORS) {
        dataInput.innerHTML += '.'
    }
}

function arithmeticOperation(event) {
    const inputValue = event.target.innerHTML;
    if (NUMBER_OPERATORS.includes(inputValue)) {
        if (dataInput.innerHTML === '0'){
            dataInput.innerHTML = ''
        }
        dataInput.innerHTML += inputValue;
        secondNumber = dataInput.innerHTML
        fontSizeToNumber();

        console.log(secondNumber)
        console.log(fistNumber)
    }
}

function fontSizeToNumber() {
    if (dataInput.innerHTML.length > 8) {
        if (fontSize > 62) {
            fontSize = fontSize - 8;
        } else if (fontSize > 48) {
            fontSize = fontSize - 3;
        } else if (fontSize > 40) {
            fontSize = fontSize - 2;
        } else if (fontSize > 17) {
            fontSize = fontSize - 1;
        }
        dataInput.style.fontSize = fontSize + 'px';
    }
    // if (dataInput.innerHTML.length > 2){
    //     let warningDiv = document.createElement('div')
    //     warningDiv.style.width = '100px';
    //     warningDiv.style.height = '100px';
    //     warningDiv.style.backgroundColor = 'gray';
    //     warningDiv.innerHTML = 'It is impossible to enter more than 15 numbers';
    //     document.body.appendChild(warningDiv);
    //     alert('div')
    // }
    console.log(fontSize);
}

gridTable.addEventListener('click', arithmeticOperation);
plusOperator.addEventListener('click', plus);
equalsOperator.addEventListener('click', equals);
acOperator.addEventListener('click', ac);
minusOperator.addEventListener('click', minus);
divisionOperator.addEventListener('click', division);
multiplyOperator.addEventListener('click', multiply);
pointEntry.addEventListener('click' , addingPoint);
interestOperator.addEventListener('click', interest);
addingMinus.addEventListener('click', addingMinusToDataInput)