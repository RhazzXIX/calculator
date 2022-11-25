
const screen = document.querySelector('#screen');

const back = document.querySelector('#back');
const sign = document.querySelector('#signed');
const gClear = document.querySelector('#gClear');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const division = document.querySelector('#divide');
const four = document.querySelector('#four');
const five = document.querySelector(`#five`);
const six = document.querySelector(`#six`);
const times = document.querySelector(`#times`);
const one = document.querySelector(`#one`);
const two = document.querySelector(`#two`);
const three = document.querySelector(`#three`);
const minus = document.querySelector(`#minus`);
const zero = document.querySelector(`#zero`);
const dot = document.querySelector(`#dot`);
const equals = document.querySelector(`#equals`);
const plus = document.querySelector(`#plus`);


let digits1 = [];
let digits2 = [];
let result = 0;


let nextDigit = false;
let addition = false;
let subtraction = false;
let multiplication = false;
let quotient = false;
let signed = false;
let calculate = false;


function showDigits() {
    if(nextDigit === false) {
        if(digits1.length == 0) {
            screen.textContent = `${result}`;
        } else {
            screen.textContent = `${digits1.join('')}`;
        };
    } else if (nextDigit === true) {
        if(digits2.length == 0) {
            screen.textContent = `${result}`;
        } else {
            screen.textContent = `${digits2.join('')}`    
        };
    };
}
function add() {
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    result = Number(numA) + Number(numB);
}

function subtract() {
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    result = Number(numA) - Number(numB);
}

function multiply() {
    let product;
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    product = Number(numA) * Number(numB);
    result = product;
    if(product.toString().length > 13) {
        result = product.toPrecision(8);
    } else {
        result = product;
    };
}

function divide () {
    let quotient;
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    quotient = Number(numA) / Number(numB);
    if(quotient.toString().length > 13) {
        result = quotient.toPrecision(10);
    } else {
        result = quotient;
    };
}

function operate () {
    if(digits1[0] === undefined) {
        digits1 = result.toString().split('');
    };
    if(addition === true) add();
    if(subtraction === true) subtract();
    if(multiplication === true) multiply();
    if(quotient === true) {
        if(digits2.join(``) == 0) {
            alert(`To Infinity and Beyond!!!\nCan't divide by zero!`);
        } else if(digits2.join(``) !== 0) {
            divide();
        };
    };
    screen.textContent = `${result}`;
    digits1.splice(0, 13);
    digits2.splice(0, 13);
    addition = false;
    subtraction = false;
    multiplication = false;
    quotient = false;
    nextDigit = false;
}

function toggleSign() {
    if(nextDigit === false) {
        if(Number(digits1.join('')) === 0) {
            digits1.splice(0, 13);
            inputDigit(0);
            calculate = false;
        } else {
            if(digits1[0] !== '-') {
                digits1.unshift('-');
            } else if (digits1[0] === '-') {
                digits1.shift('-');
            };
        };
    } else {
        if(Number(digits2.join('')) === 0) {
            digits1.splice(0, 13);
            inputDigit(0);
        } else {
            if(digits2[0] !== '-') {
                digits2.unshift('-');
            } else if (digits1[0] === '-') {
                digits2.shift('-');
            };
        };
    };
}

function inputDigit(num) {
    calculate = true;
    if(nextDigit === false) {
        if(digits1.length < 13) {
            switch (num) {
                case '.':
                    if(digits1.join('').includes('.') === false) {
                        if(digits1.length === 0) {
                            digits1.push(0);
                            digits1.push(num);
                        } else {
                            digits1.push(num);
                        };
                    };    
                    break;
                case 0:
                    if(digits1.join('').includes('.') === true) {
                        digits1.push(num)
                    } else if(digits1[0] !== 0){
                        digits1.push(num)
                    };
                    break;
                default:
                    if(digits1[0] === 0 && digits1.join('').includes('.') === false){
                        digits1.shift();
                        digits1.push(num);
                    } else {digits1.push(num)};
                    break;
            };
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            switch (num) {
                case '.':
                    if(digits2.join('').includes('.') === false) {
                        if(digits2.length === 0) {
                            digits2.push(0);
                            digits2.push(num);
                        } else {
                            digits2.push(num);
                        };
                    };    
                    break;
                case 0:
                    if(digits2.join('').includes('.') === true) {
                        digits2.push(num)
                    } else if(digits2[0] !== 0){
                        digits2.push(num)
                    };
                    break;
                default:
                    if(digits2[0] === 0 && digits2.join('').includes('.') === false){
                        digits2.shift();
                        digits2.push(num);
                    } else {digits2.push(num)};
                    break;
            };
        };
    }
    showDigits();
}

back.addEventListener('click', (e) => {
    if(nextDigit === false) {
        digits1.pop();
    } else {
        digits2.pop();
    };
    showDigits();
});

sign.addEventListener('click', (e) => {
    toggleSign();
    showDigits();
});

gClear.addEventListener('click', (e) => {
    result = 0;
    screen.textContent = `${result}`;
    digits1.splice(0, 13);
    digits2.splice(0, 13);
    addition = false;
    quotient = false;
    subtraction = false;
    multiplication = false;
    nextDigit = false;
    calculate = false;
    e.stopPropagation();
});

dot.addEventListener('click', (e) => {
    inputDigit('.');
    showDigits();
});

zero.addEventListener('click', (e) => {
    inputDigit(0);
    e.stopPropagation();
});
one.addEventListener('click', (e) => {
    inputDigit(1);
    e.stopPropagation();
});
two.addEventListener('click', (e) => {
    inputDigit(2);
    e.stopPropagation();
});
three.addEventListener('click', (e) => {
    inputDigit(3);
    e.stopPropagation();
});
four.addEventListener('click', (e) => {
    inputDigit(4);
    e.stopPropagation();
});
five.addEventListener('click', (e) => {
    inputDigit(5);
    e.stopPropagation();
})
six.addEventListener('click', (e) => {
    inputDigit(6);
    e.stopPropagation();
});
seven.addEventListener('click', (e) => {
    inputDigit(7);
    e.stopPropagation();
});
eight.addEventListener('click', (e) => {
    inputDigit(8);
    e.stopPropagation();
});
nine.addEventListener('click', (e) => {
    inputDigit(9);
    e.stopPropagation();
});

equals.addEventListener('click', (e) => {
    if(calculate === false) {
        showDigits();
    } else if (calculate === true) {
        operate();
        calculate = false;
    };
    e.stopPropagation();
});

plus.addEventListener('click', (e) => {
    if(calculate === false) {
        showDigits();
    } else {
        addition = true;
        subtraction = false;
        multiplication = false;
        quotient = false;
        if(nextDigit === false){
            showDigits();
            nextDigit = true;
        } else if (nextDigit === true) {
            operate();
            screen.textContent = `${result}`;
            digits1.push(result);
        }; 
    };
    e.stopPropagation(); 
});

minus.addEventListener('click', (e) => {
    if(calculate === false) {
        showDigits();
    } else {
        subtraction = true;
        addition = false;
        multiplication = false;
        quotient = false;
        if(nextDigit === false) {
            showDigits();
            nextDigit = true;
        } else if (nextDigit === true) {
            operate();
            screen.textContent = `${result}`;
            digits1.push(result);
        };
    };
    e.stopPropagation();
});

times.addEventListener('click', (e) => {
    if(calculate === false) {
        showDigits();
    } else {
        multiplication = true;
        addition = false;
        subtraction = false;
        quotient = false;
        if(nextDigit === false) {
            showDigits();
            nextDigit = true;
        } else if (nextDigit === true) {
            operate();
            screen.textContent = `${result}`;
            digits1.push(result);
        };
    };
    e.stopPropagation();
});

division.addEventListener('click', (e) => {
    if(calculate === false) {
        showDigits();
    } else {
        quotient = true;
        addition = false;
        subtraction = false;
        multiplication = false;
        if(nextDigit === false) {
            showDigits();
            nextDigit = true;
        } else if (nextDigit === true) {
            operate();
            screen.textContent = `${result}`;
            digits1.push(result);        
        };
    }
    e.stopPropagation();
});

division.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
division.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});
times.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
times.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});
minus.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
minus.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});
plus.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
plus.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});
equals.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
equals.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});

// test keydown##########
// const body = document.querySelector(`body`);
// body.addEventListener('keydown', (e) => {
//     equals.classList.toggle(`active`);
// });
// body.addEventListener('keyup', (e) => {
//     equals.classList.toggle(`active`);
// });
