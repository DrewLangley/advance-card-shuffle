import { Deck } from "./src/models/deck";
import { Player } from "./src/models/player";
import { shuffle } from "./src/helpers/shuffle";
import { ShuffleType } from "./src/helpers/shuffle/shuffleType";
import readlineSync from 'readline-sync';


export const play = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  console.log('Welcome to poker: ');

  const shuffleType = readlineSync.keyInSelect((Object.keys(ShuffleType).filter((el) => { return isNaN(Number(el)) })).map((item) => item), 'How would you like to shuffle?');

  const shuffleNumber = readlineSync.questionInt('How many times would you like to shuffle?');

  const handSize = readlineSync.questionInt('How many cards would you like to draw? 3, 5, 6 or 7', { limit: '$<3-7>' });

  // create deck
  const deck = new Deck();
  const player = new Player(userName);

  // shuffle the deck
  shuffle(deck, shuffleType, shuffleNumber);

  console.log('\n ',);

  // deal cards
  player.dealCards(deck.cards, handSize);
  console.log('\n ',);
  // reveal cards
  console.log(player.checkCards());
  console.log('\n ',);
  // print result
  console.log(player.checkResult());
  console.log('\n ',);
}

play();

export default { play }