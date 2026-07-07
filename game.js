let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function getComputerChoice() {
  const MIN = 1;
  const MAX = 3;

  //Choose a number between the min and max values, max inclusive. Note that Math.random() itself only returns values between 0 and 0.9999999...
  const choicenum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  switch (choicenum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

const getHumanChoice = () =>
  prompt("Choose One: rock || paper || scissors", "rock").toLowerCase();

function DecideOutcome(humanChoice, computerChoice) {
  
  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        return "computer";
      case "scissors":
        return "human";
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        return "computer";
      case "paper":
        return "human";
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "scissors":
        return "computer";
      case "rock":
        return "human";
    }
  }
  return "tie";
}

const PlayRound = (humanChoice, resultsTextElem) => {

  gamesPlayed++;
  //let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(humanChoice);

  let results;

  let outcome = DecideOutcome(humanChoice, computerChoice);
  console.log(outcome);

  switch (outcome) {
    case "tie":
      humanScore++;
      computerScore++;
      results = `It is a Tie:\n\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`;
      break;
    case "human":
      humanScore++;
      results = `Human Wins!\n\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`;
      break;
    case "computer":
      computerScore++;
      results = `Computer Wins!\n\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`;
      break;
  }
  if(gamesPlayed === 5){
    resultTextElem.textContent = (humanScore > computerScore ? "Congratulations! You Win" : "Damn! You Lost!") + `\n\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
  }else{
    resultsTextElem.textContent = `Human Chooses: ${humanChoice}\nComputer Chooses: ${computerChoice}\n\n\n${results}`;
  }
  
}

const playerChoices = document.querySelectorAll("#player-choice > button");
const resultTextElem = document.getElementById("results");

playerChoices.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    PlayRound(btn.target.value, resultTextElem)
  })
});
