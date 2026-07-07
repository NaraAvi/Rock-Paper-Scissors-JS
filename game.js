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

  alert(`Computer Chooses: ${computerChoice}`);
  console.log(humanChoice);

  let results;

  switch (DecideOutcome(humanChoice, computerChoice)) {
    case "tie":
      humanScore++;
      computerScore++;
      results = `It is a Tie: Human: ${humanScore} || Computer: ${computerScore}`;
      break;
    case "human":
      humanScore++;
      results = `Human Wins! Human: ${humanScore} || Computer: ${computerScore}`;
      break;
    case "computer":
      computerScore++;
      results = `Computer Wins! Human: ${humanScore} || Computer: ${computerScore}`;
      break;
  }
  resultsTextElem.textContent = results
}

(() => {
  const playerChoices = document.querySelectorAll("#player-choice > button");
  const resultTextElem = document.getElementById("results");

  playerChoices.forEach((btn) => {
    btn.addEventListener("click", (btn) => {
      PlayRound(btn.target.value, resultTextElem)
    })
  });

})();