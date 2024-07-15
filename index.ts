import { Deck } from "./src/models/deck";
import { Player } from "./src/models/player";
import { shuffle } from "./src/helpers/shuffle";
import { ShuffleType } from "./src/helpers/shuffle/shuffleType";
import readlineSync from 'readline-sync';


const play = (playerName: string, shuffleType: ShuffleType, shuffleNumber: number, handSize: number) => {
  console.log('shuffleType: ', shuffleType);
  // create deck
  const deck = new Deck();
  const player = new Player(playerName);

  // shuffle the deck
  shuffle(deck, shuffleType, shuffleNumber);

  console.log('\n ',);
  // console.log('deck: ', deck.toString());

  // deal cards
  player.dealCards(deck.cards, handSize);
  console.log('\n ',);
  console.log(player.checkCards());
  console.log('\n ',);
  console.log(player.checkResult());
  console.log('\n ',);

}

const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log('Welcome to poker: ');

const shuffleType = readlineSync.keyInSelect((Object.keys(ShuffleType).filter((el) => { return isNaN(Number(el)) })).map((item) => item), 'How would you like to shuffle?');
console.log('shuffleType: ', shuffleType);

const shuffleNumber = readlineSync.questionInt('How many times would you like to shuffle?');
console.log('shuffleNumber: ', shuffleNumber);

const handSize = readlineSync.questionInt('How many cards would you like to draw? 3, 5, 6 or 7', { limit: '$<1-7>' });

play(userName, shuffleType, shuffleNumber, handSize);


export default { play }