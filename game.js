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
  let outcome = "";

  if (humanChoice === computerChoice) {
    outcome = "tie";
  }

  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        outcome = "computer";
        break;
      case "scissors":
        outcome = "human";
        break;
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        outcome = "computer";
        break;
      case "paper":
        outcome = "human";
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "scissors":
        outcome = "computer";
        break;
      case "rock":
        outcome = "human";
        break;
    }
  }
  return outcome;
}

function PlayGame() {
  console.log(`Alright, Lets Play`);

  function PlayRound() {
    gamesPlayed++;
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Your Choice: ${humanChoice}`);
    console.log(`Computers Choice: ${computerChoice}`);
    alert(`Computer Chooses: ${computerChoice}`);

    let outcome = DecideOutcome(humanChoice, computerChoice);

    switch (outcome) {
      case "tie":
        (humanScore++, computerScore++);
        console.log(
          `It is a Tie: Human: ${humanScore} || Computer: ${computerScore}`,
        );
        alert(
          `It is a Tie: Human: ${humanScore} || Computer: ${computerScore}`,
        );
        break;
      case "human":
        humanScore++;
        console.log(
          `Human Wins! Human: ${humanScore} || Computer: ${computerScore}`,
        );
        alert(`Human Wins! Human: ${humanScore} || Computer: ${computerScore}`);
        break;
      case "computer":
        computerScore++;
        console.log(
          `Computer Wins! Human: ${humanScore} || Computer: ${computerScore}`,
        );
        alert(
          `Computer Wins! Human: ${humanScore} || Computer: ${computerScore}`,
        );
        break;
    }
    PlayGame();
  }

  if (gamesPlayed >= 5) {
    if (humanScore === computerScore) {
      console.log(
        `Wow, It is a tie! ${humanScore} || Computer: ${computerScore} `,
      );
      alert(`Wow, It is a tie! ${humanScore} || Computer: ${computerScore}`);
    } else {
      switch (humanScore > computerScore) {
        case true:
          console.log(
            `Congratulations, You win the game!!!! ${humanScore} || Computer: ${computerScore} `,
          );
          alert(
            `Congratulations, You win the game!!!! ${humanScore} || Computer: ${computerScore}`,
          );
          break;
        case false:
          console.log(
            `Damn, You lost the game! Better luck next time Human ${humanScore} || Computer: ${computerScore} `,
          );
          alert(
            `Damn, You lost the game! Better luck next time Human ${humanScore} || Computer: ${computerScore}`,
          );
          break;
      }
    }

    humanScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
  } else {
    PlayRound();
  }
}

PlayGame();
