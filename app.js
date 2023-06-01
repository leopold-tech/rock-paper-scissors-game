// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');

const computerChoiceText = document.getElementById('computer-choice');
const userChoiceText = document.getElementById('user-choice');
const resultText = document.getElementById('result');

const choiceBtns = document.querySelectorAll('button');

let userChoice
// let player
// let computer
// let result

choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceText.innerHTML = userChoice
    computerTurn()
}));

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1  //To get random num b/w 1 - 3. Added +1 as number counting starts from 0
    console.log(randomNum);
}