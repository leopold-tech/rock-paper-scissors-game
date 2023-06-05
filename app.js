// Accessing elements in JS
const computerText = document.getElementById('computer-choice');
const userText = document.getElementById('user-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('button');

const userScoreText = document.getElementById('user-scorecard');
const compScoreText = document.getElementById('comp-scorecard');

let user
let computer
let result

let userScore = 0;
let compScore = 0;

// Using For..Each loop to add EventListener to all 3 buttons
// This works as all 3 buttons have similar functionality. Otherwise, can use classes
choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    user = e.target.innerHTML
    userText.innerHTML = user
    computerTurn()
    setTimeout(checkResult, 400); //setInterval and setTimeout are different
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
    if (computer === 'Rock') {
        result = (user == 'Paper') ? "You Win!" : "You Lose!";
        resultText.textContent = result;
    }
    else if (computer === 'Paper') {
        result = (user == 'Scissors') ? "You Win!" : "You Lose!";
        resultText.textContent = result;

    }
    else if (computer === 'Scissors') {
        result = (user == 'Rock') ? "You Win!" : "You Lose!";
        resultText.textContent = result;

    } else {
        result = "Draw!";
        resultText.textContent = result;
    }
    console.log(result);
    scoreCard(result);
    return;
}   

// Function to update scorecard
function scoreCard(result) {
    if (result == "You Win!") {
        userScore += 1;
        console.log(userScore);
        userScoreText.textContent = userScore;

    } else if (result == 'You Lose!') {
        compScore += 1;
        console.log(compScore);
        compScoreText.textContent = compScore;
    }
return
}