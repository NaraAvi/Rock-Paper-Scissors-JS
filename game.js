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

const PlayRound = (humanChoice) => {
  gamesPlayed++;
  //let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  //alert(`Computer Chooses: ${computerChoice}`);
  console.log(humanChoice);
  switch (DecideOutcome(humanChoice, computerChoice)) {
    case "tie":
      humanScore++;
      computerScore++;
      //alert(`It is a Tie: Human: ${humanScore} || Computer: ${computerScore}`);
      break;
    case "human":
      humanScore++;
      //alert(`Human Wins! Human: ${humanScore} || Computer: ${computerScore}`);
      break;
    case "computer":
      computerScore++;
      //alert(`Computer Wins! Human: ${humanScore} || Computer: ${computerScore}`);
      break;
  }
}

function PlayGame() {
  // if (gamesPlayed >= 5) {
  //   if (humanScore === computerScore) {
  //     alert(`Wow, It is a tie! ${humanScore} || Computer: ${computerScore}`);
  //   } 
  //   else {
  //     switch (humanScore > computerScore) {
  //       case true:
  //         alert(`Congratulations, You win the game!!!! ${humanScore} || Computer: ${computerScore}`);
  //         break;
  //       case false:
  //         alert(`Damn, You lost the game! Better luck next time Human ${humanScore} || Computer: ${computerScore}`);
  //         break;
  //     }
  //   }
  //   humanScore = 0;
  //   computerScore = 0;
  //   gamesPlayed = 0;
  // }
  // PlayRound()
  const playerChoices = document.querySelectorAll("#player-choice > button");
  // console.log(playerChoices.values);
  playerChoices.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      PlayRound(event.target.value)
    })
  });
  
}

PlayGame();
