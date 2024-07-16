import { play } from "../helpers/game";
import readlineSync from 'readline-sync';
import { ShuffleType } from "../helpers/shuffle/shuffleType";



/**
 * This file is intended to be played form the command line using `yarn play` command
 * 
 * the function prompts the user and then calls the play function with inputted arguments
 */
const consolePlay = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  console.log('Welcome to poker: ');

  const shuffleType = readlineSync.keyInSelect((Object.keys(ShuffleType).filter((el) => { return isNaN(Number(el)) })).map((item) => item), 'How would you like to shuffle?');

  const shuffleNumber = readlineSync.questionInt('How many times would you like to shuffle?');

  const handSize = readlineSync.questionInt('How many cards would you like to draw? 3, 5, 6 or 7', { limit: '$<3-7>' });

  play(userName, handSize, shuffleType, shuffleNumber);

}

consolePlay();

export default consolePlay;