//anchor the screen display text content
const screen = document.querySelector('#screen');

//anchor buttons
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

// array that will be displayed in the screen
let digits1 = [];
let digits2 = [];
let result = 0;

//boolean variables to for calculator flow
let nextDigit = false;
let addition = false;
let subtraction = false;
let multiplication = false;
let quotient = false;
let signed = false;


//function that shows the array in the screen
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

//show button input at the display
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
//function for checking for number sign
function toggleSign() {
    if(nextDigit === false) {
        if(digits1[0] !== '-') {
            digits1.unshift('-');
        } else if (digits1[0] === '-') {
            digits1.shift('-');
        }
    } else {
        if(digits2[0] !== '-') {
            digits2.unshift('-');
        } else if (digits1[0] === '-') {
            digits2.shift('-');
        }
    };
}
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
    e.stopPropagation();
});
dot.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.join('').includes('.') === false) {
            if(digits1.length === 0) {
                inputDigit(0);
                inputDigit('.');
            } else {
                inputDigit('.');
            };
            
        };
    } else if (nextDigit === true) {
        if(digits2.join('').includes('.') === false) {
            if(digits2.length === 0) {
                inputDigit(0);
                inputDigit('.');
            } else {
                inputDigit('.');
            };
        };
    };
    showDigits();
});

function inputDigit(num) {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(num);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(num);
        };
    }
    showDigits();
}

zero.addEventListener('click', (e) => {
    if(digits1.length > 0) inputDigit(0);
});
one.addEventListener('click', (e) => {
    inputDigit(1);
});
two.addEventListener('click', (e) => {
    inputDigit(2);
});
three.addEventListener('click', (e) => {
    inputDigit(3);
});
four.addEventListener('click', (e) => {
    inputDigit(4);
});
five.addEventListener('click', (e) => {
    inputDigit(5);
})
six.addEventListener('click', (e) => {
    inputDigit(6);
});
seven.addEventListener('click', (e) => {
    inputDigit(7);
});
eight.addEventListener('click', (e) => {
    inputDigit(8);;
});
nine.addEventListener('click', (e) => {
    inputDigit(9);
});

//do the operations when pressing the equals
equals.addEventListener('click', (e) => {
    operate();
    screen.textContent = `${result}`;
    addition = false;
    subtraction = false;
    multiplication = false;
    quotient = false;
    nextDigit = false;
});

//function to operate
function operate () {
    if(addition === true) add();
    if(subtraction === true) subtract();
    if(multiplication === true) multiply();
    if(quotient === true) divide();
    digits1.splice(0, 13);
    digits2.splice(0, 13);
}


//function to add the digits
function add() {
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    result = Number(numA) + Number(numB);
}

plus.addEventListener('click', (e) => {
    addition = true;
    subtraction = false;
    multiplication = false;
    quotient = false;
    if(digits1[0] === undefined) {
        digits1.push(result);
    };
    if(nextDigit === false){
        showDigits();
        nextDigit = true;
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
    };        
});

minus.addEventListener('click', (e) => {
    subtraction = true;
    addition = false;
    multiplication = false;
    quotient = false;
    if(digits1[0] === undefined) {
        digits1.push(result);
    };
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
    };
});

times.addEventListener('click', (e) => {
    multiplication = true;
    addition = false;
    subtraction = false;
    quotient = false;
    if(digits1[0] === undefined) {
        digits1.push(result);
    };
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
    };
});

division.addEventListener('click', (e) => {
    quotient = true;
    addition = false;
    subtraction = false;
    multiplication = false;
    if(digits1[0] === undefined) {
        digits1.push(result);
    };
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);        
    };
});

//flash the screen when pressing the operation signs
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


//function to subtract

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

//function to divide numbers
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


// test keydown##########
// const body = document.querySelector(`body`);
// body.addEventListener('keydown', (e) => {
//     equals.classList.toggle(`active`);
// });
// body.addEventListener('keyup', (e) => {
//     equals.classList.toggle(`active`);
// });
