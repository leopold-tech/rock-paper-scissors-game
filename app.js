// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');

// Accessing elements in JS
const computerText = document.getElementById('computer-choice');
const userText = document.getElementById('user-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('button');

let user
let computer
let result

// Using For..Each loop to add EventListener to all 3 buttons
// This works as all 3 buttons have similar functionality. Otherwise, can use classes
choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    user = e.target.innerHTML
    userText.innerHTML = user
    computerTurn()
    setInterval(checkResult, 400);
}));

// Function using math.random to get computer turn
function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1  //To get random num b/w 1 - 3. Added +1 as number counting starts from 0

    switch (randomNum) {
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }

    computerText.innerHTML = computer;
};

// Function to check result
function checkResult() {
    if (user == computer) {
        result = "Draw!";
    }
    else if (computer == 'Rock') {
        result = (user == 'Paper') ? "You Win!" : "You Lose!";
    }
    else if (computer == 'Paper') {
        result = (user == 'Scissors') ? "You Win!" : "You Lose!";
    }
    else if (computer == 'Scissors') {
        result = (user == 'Rock') ? "You Win!" : "You Lose!";
    }

    resultText.textContent = result;

    return;
};

// function checkResult() {
//     if (user == computer) {
//         return "Draw!";
//     }
//     else if (computer == 'Rock') {
//         return result = (user == 'Paper') ? "You Win!" : "You Lose!";
//     }
//     else if (computer == 'Paper') {
//         return result = (user == 'Scissors') ? "You Win!" : "You Lose!";
//     }
//     else if (computer == 'Scissors') {
//         return result = (user == 'Rock') ? "You Win!" : "You Lose!";
//     }
// };