"use strict"


const clearBtn = document.querySelector('clear'),
deleteBtn = document.querySelector('delete'),
oneBtn = document.querySelector('one'),
twoBtn = document.querySelector('two'),
threeBtn = document.querySelector('three'),
fourBtn = document.querySelector('four'),
fiveBtn = document.querySelector('five'),
sixBtn = document.querySelector('six'),
sevenBtn = document.querySelector('seven'),
eightBtn = document.querySelector('eight'),
nineBtn = document.querySelector('nine'),
zeroBtn = document.querySelector('zero'),
dotBtn = document.querySelector('dot'),
addBtn = document.querySelector('add'),
subtractBtn = document.querySelector('subtract'),
multiplyBtn = document.querySelector('multiply'),
divideBtn = document.querySelector('divide'),
equalsBtn = document.querySelector('equals'),
displayScreen = document.querySelector('display');

const displayCalculation = () => {
    
}





const add = (A, B) => {
    return A + B;
}

const subtract = (A, B) => {
    return A - B;
}

const multiply = (A, B) => {
    return A * B;
}

const divide = (A, B) => {
    return parseFloat((A / B).toPrecision(5));
}

const operate = (A, operator, B) => {
    let result;
    switch (operator) {
        case '+':
            result = add(A, B);
            break;

        case '-':
            result = subtract(A, B);
            break;

        case '*':
            result = multiply(A, B);
            break;

        case '/':
            result = divide(A, B);
            break;

        default:
            break;
    }
    return result;
}