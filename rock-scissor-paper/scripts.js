const computerPlayDisplay = document.querySelector("#computer-play");
const resultPlayDisplay = document.querySelector(".result-container");

const gamesPlayedDisplay = document.querySelector("#games-played");
const userWinsDisplay = document.querySelector("#user-wins");
const computerWinsDisplay = document.querySelector("#computer-wins");

const winnerDisplay = document.querySelector(".winner-container");

let gamesPlay = 0;

let playerWins = 0;
let computerWins = 0;

// Function to generate the play of the computer
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerPlay = "";

  switch (randomNumber) {
    case 1:
      computerPlay = "Rock";
      computerPlayDisplay.textContent = "Computer play: Rock";
      break;
    case 2:
      computerPlay = "Scissor";
      computerPlayDisplay.textContent = "Computer play: Scissor";
      break;
    case 3:
      computerPlay = "Paper";
      computerPlayDisplay.textContent = "Computer play: Paper";
      break;
  }

  return computerPlay;
}

// Function to standardize the input
function capitalize(string) {
  let str = string.toLowerCase();
  let uppStr = "";
  let letter = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      letter = str.charAt(i).toUpperCase();
    } else {
      letter = str.charAt(i);
    }
    uppStr = uppStr.concat(letter);
  }

  return uppStr;
}

function playGame(playerSelection, computerSelection) {
  let playerGame = capitalize(playerSelection);
  let result = "";

  if (playerGame === computerSelection) {
    result = "Even game";
  } else if (playerGame === "Rock" && computerSelection === "Paper") {
    result = `You lose! ${computerSelection} beats ${playerGame}`;
  } else if (playerGame === "Paper" && computerSelection === "Scissor") {
    result = `You lose! ${computerSelection} beats ${playerGame}`;
  } else if (playerGame === "Scissor" && computerSelection === "Rock") {
    result = `You lose! ${computerSelection} beats ${playerGame}`;
  } else if (playerGame === "Paper" && computerSelection === "Rock") {
    result = `You win! ${playerGame} beats ${computerSelection}`;
  } else if (playerGame === "Scissor" && computerSelection === "Paper") {
    result = `You win! ${playerGame} beats ${computerSelection}`;
  } else {
    result = `You win! ${playerGame} beats ${computerSelection}`;
  }

  //console.log(result);
  resultPlayDisplay.innerText = result;
  return result;
}

function game(play) {
  // Old for to play a fixed number of game
  //for (let i = 0; i < 5; i++) {}

  let result = playGame(play, computerPlay());
  console.log(result);

  //if computer wins increment computerWin else increment playerWin
  if (result.includes("win")) {
    playerWins++;
  } else if (result.includes("lose")) {
    computerWins++;
  }

  gamesPlay++;

  gamesPlayedDisplay.textContent = gamesPlay;
  userWinsDisplay.textContent = playerWins;
  computerWinsDisplay.textContent = computerWins;

  if (playerWins === 5) {
    winnerDisplay.textContent = `You win the game ${playerWins} - ${computerWins}`;
  }

  if (computerWins === 5) {
    winnerDisplay.textContent = `You lose the game ${playerWins} - ${computerWins}`;
  }

  // Old winner declaration after a fixed number of games
  /*
  if (playerWins > computerWins) {
    console.log(`You win the game ${playerWins} - ${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log(`You lose the game ${playerWins} - ${computerWins}`);
  } else {
    console.log(`Even game ${playerWins} - ${computerWins}`);
  }
  */
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => game("Rock"));

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => game("Paper"));

const btnScissor = document.querySelector("#btnScissor");
btnScissor.addEventListener("click", () => game("Scissor"));
