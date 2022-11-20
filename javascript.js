//anchor the screen1 text content
const screen = document.querySelector('#screen');
screen.textContent = `12345678901234567`
const alertE = document.querySelector(`#alertE`)

//anchor buttons
const gTotal = document.querySelector('#gTotal');
const back = document.querySelector('#back');
const clearEntry = document.querySelector('#cEntry');
const gClear = document.querySelector('#gClear');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
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

function showScreen() {
    screen.textContent = `${digits1.join('')}`;
    if(digits1.length == 16) {
        alertE.textContent = 'E';
    };
}

//show button input at the display
gTotal.addEventListener('click', (e) => {
    screen.textContent = 'GT';
});
back.addEventListener('click', (e) => {
    screen.textContent = 'back';
});
clearEntry.addEventListener('click', (e) => {
    screen.textContent = 'CE';
});
gClear.addEventListener('click', (e) => {
    screen.textContent = 'clear';
});
seven.addEventListener('click', (e) => {
    if(digits1.length < 16) {
        digits1.push(7);
    };
    screen.textContent = 7;
    showScreen();
});
eight.addEventListener('click', (e) => {
    screen.textContent = 8;
});
nine.addEventListener('click', (e) => {
    screen.textContent = 9;
});
divide.addEventListener('click', (e) => {
    screen.textContent = 'divide';
});
four.addEventListener('click', (e) => {
    screen.textContent = 4;
});
five.addEventListener('click', (e) => {
    screen.textContent = 5;
})
six.addEventListener('click', (e) => {
    screen.textContent = 6;
});
times.addEventListener('click', (e) => {
    screen.textContent = 'x';
});
one.addEventListener('click', (e) => {
    screen.textContent = 1;
});
two.addEventListener('click', (e) => {
    screen.textContent = 2;
});
three.addEventListener('click', (e) => {
    screen.textContent = 3;
});
minus.addEventListener('click', (e) => {
    screen.textContent = '-';
});
zero.addEventListener('click', (e) => {
    screen.textContent = 0;
});
dot.addEventListener('click', (e) => {
    screen.textContent = '.';
});
equals.addEventListener('click', (e) => {
    screen.textContent = '=';
});
plus.addEventListener('click', (e) => {
    screen.textContent = `+`;
});


//flash the screen when pressing the operation signs
divide.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation;
});
divide.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation;
});
times.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation;
});
times.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation;
});
minus.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation;
});
minus.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation;
});
plus.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation;
});
plus.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation;
});
equals.addEventListener('mousedown', (e) => {
    screen.style.color = 'rgb(221, 221, 221)';
    e.stopPropagation;
});
equals.addEventListener('mouseup', (e) => {
    screen.style.color = 'black';
    e.stopPropagation;
});


//do the operations when pressing the equals



//save the latest result to GT



//cancel current operation when pressing CE and return the latest result
