let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

let isAutoPlaying = false;
let intervalId;

/*const autoPlay = () => {
};*/
function autoPlay(){
  if (!isAutoPlaying){
  intervalId = setInterval(() => {
    const playerMove = pickCompMove();
    playGame(playerMove);
  }, 1000)
  isAutoPlaying = true;
  }
  else {
    clearInterval (intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button') 
  .addEventListener('click',() => {
    playGame('rock');
  })
document.querySelector('.js-paper-button') 
  .addEventListener('click',() => {
    playGame('paper');
  })
document.querySelector('.js-scissors-button') 
  .addEventListener('click',() => {
    playGame('scissors');
})

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }

});

function playGame(playerMove){
const compMove = pickCompMove();

let result ='';

if (playerMove === 'scissors'){
  if(compMove === 'rock')
  {result = 'You Lose';}

  else if(compMove === 'paper')
 {result = 'You Win';}

  else if(compMove === 'scissors')
  {result = 'Tie';}
}

else if (playerMove === 'paper'){
  if(compMove === 'rock')
  {result = 'You Win';}

  else if(compMove === 'paper')
  {result = 'Tie';}

  else if(compMove === 'scissors')
  {result = 'You Lose';}
}

else if (playerMove === 'rock'){
  if(compMove === 'rock')
  {result = 'Tie';}

  else if(compMove === 'paper')
  {result = 'You Lose';}

  else if(compMove === 'scissors')
  {result = 'You Win';}
}

if(result === 'You Win'){
  score.wins += 1;
} 
else if(result === 'You Lose'){
  score.losses += 1;
} 
else if(result === 'Tie'){
  score.ties += 1;
} 

localStorage.setItem('score',JSON.stringify(score)); // local storage only supports strings

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML 
  = `You 
  <img src="images/${playerMove}.png" class="move-icon"> 
  <img src="images/${compMove}.png" class="move-icon"> 
  Computer`
updateScore();
}

function updateScore(){
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`
}

function pickCompMove(){
const randomNumber = Math.random();

let compMove = '';

if (randomNumber >= 0 && randomNumber < 1/3)
{compMove = 'rock';}

else if(randomNumber >= 1/3 && randomNumber < 2/3)
{compMove = 'paper';}

else if(randomNumber >= 2/3 && randomNumber < 1)
{compMove =  'scissors';}

return compMove;
}  
