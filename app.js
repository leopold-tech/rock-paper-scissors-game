// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');

const computerText = document.getElementById('computer-choice');
const userText = document.getElementById('user-choice');
const resultText = document.getElementById('result');

const choiceBtns = document.querySelectorAll('button');

// let userChoice
let user
let computer
let result

choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    user = e.target.innerHTML
    userText.innerHTML = user
    computerTurn()
    resultText.textContent = checkResult();
}));

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

function checkResult() {
    if (user == computer) {
        return "Draw!";
    }
    else if (computer == 'Rock') {
        return result = (user == 'Paper') ? "You Win!" : "You Lose!";
    }
    else if (computer == 'Paper') {
        return result = (user == 'Scissors') ? "You Win!" : "You Lose!";
    }
    else if (computer == 'Scissors') {
        return result = (user == 'Rock') ? "You Win!" : "You Lose!";
    }
};