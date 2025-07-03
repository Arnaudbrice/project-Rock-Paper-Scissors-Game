const computer = ["Rock", "Paper", "Scissors"];
const result = ["win", "lose", "draw"];
// get the input parameter provided to the script at runtime (when script.js is executed by Node.js).

const userInput = process.argv[2];
// console.log(userInput);
// create a random number between 0 and computer.length-1 (0,1 or 2)
const computerChoice = computer[Math.floor(Math.random() * computer.length)];

//Scissors - Paper:los-> Rock:win -> Scissors:draw
//Paper - Rock:lose -> Scissors:win -> Paper:draw
//Rock - Scissors:los -> Paper:win -> Rock:draw

/**
 *Displays the result of the game based on the user input and computer choice.
 *
 * @param {*} userInput, the user input
 * @param {*} computerChoice, the random choice of the computer
 * @returns {undefined} This function does not return a value; it logs the result to the console.
 */
const endResult2 = (userInput, computerChoice) => {
  const [win, lose, draw] = result;
  //Scissors - Paper:los-> Rock:win -> Scissors:draw
  //Paper - Rock:lose -> Scissors:win -> Paper:draw
  //Rock - Scissors:lose -> Paper:win -> Rock:draw

  const gameResult = {
    Scissors: {
      Paper: lose,
      Rock: win,
      Scissors: draw
    },
    Paper: {
      Rock: lose,
      Scissors: win,
      Paper: draw
    },
    Rock: {
      Scissors: lose,
      Paper: win,
      Rock: draw
    }
  };

  if (!computer.includes(userInput)) {
    console.log("Wrong input,please enter: Rock, Paper or Scissors");
    return;
  }
  // note: gameResult.Scissors has the same result as gameResult["Scissors"]
  console.log(
    `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${gameResult[userInput][computerChoice]}!`
  );
};

endResult2(userInput, computerChoice);

// solution 2
// Scissors - Paper-> Scissors
//Scissors-Rock -> Rock

//Paper - Rock -> Paper
//Paper-Scissors -> Scissors

//Rock - Scissors -> Rock
//Rock-Paper-> Paper
/**
 *Displays the result of the game based on user input and computer choice.
 *
 * @param {*} userInput, the user input
 * @param {*} computerChoice, the random choice of the computer
 * @returns {undefined} This function does not return a value; it logs the result to the console.
 */
/* const endResult = (userInput, computerChoice) => {

    if (!computer.includes(userInput)) {
        console.log("Wrong input,please enter: Rock, Paper or Scissors");
        return;
      }
  if (userInput === computerChoice) {
    console.log(
      `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[2]}!`
    );
    return;
  }
  while (userInput !== computerChoice) {
    if (userInput === "Scissors") {
      if (computerChoice === "Paper") {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[0]}!`
        );
        break;
      } else {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[1]}!`
        );
        break;
      }
    } else if (userInput === "Paper") {
      if (computerChoice === "Rock") {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[1]}!`
        );
        break;
      } else {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[0]}!`
        );
        break;
      }
    } else {
      if (computerChoice === "Scissors") {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[0]}!`
        );
        break;
      } else {
        console.log(
          `Output: You chose ${userInput}. Computer chose ${computerChoice}. You ${result[1]}!`
        );
        break;
      }
    }
  }
};

endResult(userInput, computerChoice); */
