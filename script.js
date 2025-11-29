const choices = ['rock','paper','scissors'];
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('computer-score');
const playerPickImg = document.getElementById('player-pick');
const computerPickImg = document.getElementById('computer-pick');
const resultText = document.getElementById('result-text');
const playAgainBtn = document.getElementById('play-again');

let userScore = 0, compScore = 0;

document.querySelectorAll('.choice').forEach(el => {
  el.addEventListener('click', () => {
    const userPick = el.id;
    const compPick = choices[Math.floor(Math.random() * 3)];

    playerPickImg.src = `${userPick}.png`;
    playerPickImg.alt = userPick;
    playerPickImg.style.visibility = 'visible';

    computerPickImg.src = `${compPick}.png`;
    computerPickImg.alt = compPick;
    computerPickImg.style.visibility = 'visible';

   
    if (userPick === compPick) {
      resultText.innerText = "It's a Draw!";
    } else if (
      (userPick === 'rock' && compPick === 'scissors') ||
      (userPick === 'paper' && compPick === 'rock') ||
      (userPick === 'scissors' && compPick === 'paper')
    ) {
      resultText.innerText = "You Win!";
      userScore++;
      userScoreSpan.innerText = userScore;
    } else {
      resultText.innerText = "You Lose!";
      compScore++;
      compScoreSpan.innerText = compScore;
    }

   
    playAgainBtn.style.display = 'block';
  });
});

playAgainBtn.addEventListener('click', () => {
 
  playerPickImg.style.visibility = 'hidden';
  computerPickImg.style.visibility = 'hidden';
  resultText.innerText = "Make your move!";
  playAgainBtn.style.display = 'none';
});
