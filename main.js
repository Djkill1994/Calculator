const dataInput = document.querySelector('.data-input');
const gridTable = document.querySelector('.grid');

function myFunc(event){
    const valueTarget = (event.target.attributes.value.value)
    return valueTarget
}

// function addToNumber (){
//     myFunc(valueTarget)
//     console.log(valueTarget)
// }

gridTable.addEventListener('click', myFunc, addToNumber)


