let input = document.getElementById('time-input');
let button = document.getElementById('start-button');
let timerDisplay = document.getElementById('timer-display');

let intervalId = null;
let currentValue = 0;

function startTimer() {
    intervalId = setInterval(() => {
        if (currentValue > 0) {
            currentValue--;
            updateDisplay(currentValue);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
}

function updateDisplay(value) {
    timerDisplay.textContent = value;
}

function buttonClick() {
    stopTimer();

    const inputValue = parseInt(input.value);
    if(validValue(inputValue)) {
        currentValue = inputValue;
        updateDisplay(currentValue);
        startTimer();
    } else {
        alert('Enter a valid number greater than or equal to 0.');
    }
}

function validValue(value) {
    return !isNaN(value) && value >= 0;
}

button.addEventListener('click', buttonClick);