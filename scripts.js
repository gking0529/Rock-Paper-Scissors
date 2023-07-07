var round = 0;
var playerScore = 0;
var computerScore = 0;
var gameTitleText = 'Rock, paper, or scissors...... Pick one!';
var gameTitleIndex = 0;

document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
});

document.getElementById('restart').addEventListener('click', function() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('computer-choice').textContent = '';
    document.getElementById('game').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';
    startNewRound();
});

function startNewRound() {
    document.getElementById('button-container').style.display = 'none';
    document.getElementById('game-title').textContent = '';
    gameTitleText = 'Rock, Paper, or Scissors...... Pick One!';
    gameTitleIndex = 0;
    typeGameTitle().then(function() {
        document.getElementById('button-container').style.display = 'flex';
    });
}

function typeGameTitle() {
    return new Promise(function(resolve) {
        if (gameTitleIndex < gameTitleText.length) {
            document.getElementById('game-title').textContent += gameTitleText.charAt(gameTitleIndex);
            gameTitleIndex++;
            setTimeout(function() {
                resolve(typeGameTitle());
            }, 100);
        } else {
            resolve();
        }
    });
}

function playGame(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('computer-choice').textContent = 'Computer chose: ' + computerChoice;

    if (playerChoice === computerChoice) {
        document.getElementById('result').textContent = 'Round ' + (round + 1) + ': It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        document.getElementById('result').textContent = 'Round ' + (round + 1) + ': You win this round!';
    } else {
        computerScore++;
        document.getElementById('result').textContent = 'Round ' + (round + 1) + ': You lose this round!';
    }

    document.getElementById('player-score').textContent = 'Player: ' + playerScore;
    document.getElementById('computer-score').textContent = 'Computer: ' + computerScore;

    round++;

    if (round >= 5) {
        endGame();
    }
}

function endGame() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';

    if (playerScore > computerScore) {
        document.getElementById('game-over').innerHTML = '<h1>Game Over: You Win!</h1><button id="restart">Restart</button>';
    } else if (playerScore < computerScore) {
        document.getElementById('game-over').innerHTML = '<h1>Game Over: You Lose!</h1><button id="restart">Restart</button>';
    } else {
        document.getElementById('game-over').innerHTML = '<h1>Game Over: It\'s a Tie!</h1><button id="restart">Restart</button>';
    }

    document.getElementById('restart').addEventListener('click', function() {
        round = 0;
        playerScore = 0;
        computerScore = 0;
        document.getElementById('result').textContent = '';
        document.getElementById('computer-choice').textContent = '';
        document.getElementById('game').style.display = 'block';
        document.getElementById('game-over').style.display = 'none';
        startNewRound();
    });
}

startNewRound();
