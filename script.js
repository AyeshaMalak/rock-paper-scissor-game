const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const restartButton = document.getElementById('restart');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        displayResult(result, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(result, computerChoice) {
    resultDisplay.textContent = `${result} (Computer chose ${computerChoice})`;
    choices.forEach(choice => choice.disabled = true); // Disable choices
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    resultDisplay.textContent = '';
    choices.forEach(choice => {
        choice.disabled = false; // Enable choices
    });
    restartButton.style.display = 'none';
});
