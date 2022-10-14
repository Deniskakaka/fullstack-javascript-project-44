import readlineSync from 'readline-sync';
/* import { brainCalc } from '../bin/games/brain-calc.js'; */
import { barinEven } from "../bin/games/brain-even.js";
/* import { brainGcd } from "../bin/games/brain-gcd.js"; */

const greetings = () => {
    let count = 0;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name?: ');
    console.log(`Hello ${name}!`);
    barinEven(count, name);
   /*  brainCalc(count, name);
    brainGcd(count, name) */
};

export default greetings;
