const dataInput = document.querySelector('.data-input');
const gridTable = document.querySelector('.grid');
const assignmentOperator = document.querySelector('.assignment-operator');
const arithmeticOperator = document.querySelector('.arithmetic-operator');
const gridNumber = document.querySelector('.number');
let fontSize = 90;

function dataInputValue(event){
    let valueData = event.target.attributes.value.value;
    if(valueData === String(Number(valueData))) {
        dataInput.innerHTML += valueData;
    }else if (valueData === '.'){
        dataInput.innerHTML += valueData;
    }
}

function fontSizeToNumber (){
    dataInputValue(event);
    if (dataInput.innerHTML.length > 9) {
        if (fontSize > 62) {
            fontSize = fontSize - 7
        }else if (fontSize > 44){
            fontSize = fontSize-3
        }else if(fontSize > 35){
            fontSize = fontSize-2
        }else if(fontSize > 17){
            fontSize = fontSize-1
        }else if (dataInput.innerHTML.length >50) {

        }
        dataInput.style.fontSize = ('font-size', fontSize + 'px');
    }
}

gridTable.addEventListener('click', fontSizeToNumber)


