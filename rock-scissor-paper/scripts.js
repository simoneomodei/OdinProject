function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerPlay = "";
  switch (randomNumber) {
    case 1:
      computerPlay = "Rock";
      console.log("Rock");
      break;
    case 2:
      computerPlay = "Scissor";
      console.log("Scissor");
      break;
    case 3:
      computerPlay = "Paper";
      console.log("Paper");
      break;
  }

  return computerPlay;
}

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

  return result;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let result = playGame(prompt("Make your play!"), computerPlay());
    console.log(result);
    //if computer wins increment computerWin else increment playerWin
    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log(`You win the game ${playerWins} - ${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log(`You lose the game ${playerWins} - ${computerWins}`);
  } else {
    console.log(`Even game ${playerWins} - ${computerWins}`);
  }
}

game();
