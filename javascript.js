//anchor the screen display text content
const screen = document.querySelector('#screen');
const alertE = document.querySelector(`#alertE`)
const alertGT = document.querySelector(`#alertGT`);

//anchor buttons
const gTotal = document.querySelector('#gTotal');
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
let grandTotal = 0;
let result = null;

//boolean variables to for calculator flow
let nextDigit = false;
let addition = false;
let subtraction = false;
let multiplication = false;
let quotient = false;
let gtAlert = false;
let point = false;
let signed = false;


//function that shows the array in the screen
function showDigits() {
    if(nextDigit === false) {
        if(digits1.length == 0) {
            screen.textContent = 0;
        } else {
            screen.textContent = `${digits1.join('')}`;
            if(digits1.length == 13) {
                alertE.textContent = 'Max';
            };
        };
    } else if (nextDigit === true) {
        if(digits2.length == 0) {
            screen.textContent = 0;
        } else {
            screen.textContent = `${digits2.join('')}`
            if(digits2.length == 13) {
                alertE.textContent = 'Max';
            };
        };
    };
}

//show button input at the display
gTotal.addEventListener('click', (e) => {
    if(gtAlert === false) alertGT.textContent = ' ';
    screen.textContent = `${grandTotal}`;
    result = grandTotal;
    nextDigit = true;
    gtAlert = false;
});
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
    screen.textContent = 0;
    alertGT.textContent = '';
    alertE.textContent = '';
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
        if(digits1.length < 13) {
            if(point === false) {
                digits1.push('.');
            }
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            if(point === false) {
                digits2.push('.');
            }
        };
    }
    point = true;
    showDigits();
});
zero.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13 && digits1.length > 0) {
            digits1.push(0);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13 && digits1.length > 0) {
            digits2.push(0);
        };
    }
    showDigits();
});
one.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(1);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(1);
        };
    }
    showDigits();
});
two.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(2);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(2);
        };
    }
    showDigits();
});
three.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(3);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(3);
        };
    }
    showDigits();
});
four.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(4);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(4);
        };
    }
    showDigits();
});
five.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(5);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(5);
        };
    }
    showDigits();
})
six.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(6);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(6);
        };
    }
    showDigits();
});
seven.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(7);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(7);
        };
    }
    showDigits();
});
eight.addEventListener('click', (e) => {
      if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(8);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(8);
        };
    }
    showDigits();
});
nine.addEventListener('click', (e) => {
    if(nextDigit === false) {
        if(digits1.length < 13) {
            digits1.push(9);
        };
    } else if (nextDigit === true) {
        if(digits2.length < 13) {
            digits2.push(9);
        };
    }
    showDigits();
});

//do the operations when pressing the equals
equals.addEventListener('click', (e) => {
    alertGT.textContent = 'GT';
    gtAlert = true;
    operate();
    screen.textContent = `${result}`;
    grandTotal = result;
    addition = false;
    subtraction = false;
    multiplication = false;
    quotient = false;
    point = false;
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
    if(nextDigit === false){
        showDigits();
        nextDigit = true;
        addition = true;
        subtraction = false;
        multiplication = false;
        quotient = false;
        point = false;        
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
    };
});

minus.addEventListener('click', (e) => {
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
        subtraction = true;
        addition = false;
        multiplication = false;
        quotient = false;
        point = false;       
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
        subtraction = true;
        addition = false;
        multiplication = false;
        quotient = false;
        point = false;       
    };
});

times.addEventListener('click', (e) => {
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
        multiplication = true;
        addition = false;
        subtraction = false;
        quotient = false;
        point = false;
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
        multiplication = true;
        addition = false;
        subtraction = false;
        quotient = false;
        point = false;
    };
});

division.addEventListener('click', (e) => {
    if(nextDigit === false) {
        showDigits();
        nextDigit = true;
        quotient = true;
        addition = false;
        subtraction = false;
        multiplication = false;
        point = false;  
    } else if (nextDigit === true) {
        operate();
        screen.textContent = `${result}`;
        digits1.push(result);
        quotient = true;
        addition = false;
        subtraction = false;
        multiplication = false;
        point = false; 
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
gTotal.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation();
});
gTotal.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation();
});


//function to subtract

function subtract() {
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    result = Number(numA) - Number(numB);
}

//function to multiply
function multiply() {
    let product;
    let numA = digits1.join(``);
    let numB = digits2.join(``);
    product = Number(numA) * Number(numB);
    if(product.toString().length > 13) {
        product = product.toString().slice(0,13);
        result = Number(product);
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
        quotient = quotient.toString().slice(0,13);
        result = Number(quotient);
    } else {
        result = quotient;
    };
}





//optimize numbers for the screen


//save the latest result to GT




// test keydown##########
// const body = document.querySelector(`body`);
// body.addEventListener('keydown', (e) => {
//     equals.classList.toggle(`active`);
// });
// body.addEventListener('keyup', (e) => {
//     equals.classList.toggle(`active`);
// });
