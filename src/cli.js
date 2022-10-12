import readlineSync from 'readline-sync';
import { barinEven } from "../bin/brain-even.js";

const greetings = () => {
    let count = 0;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name?: ');
    console.log(`Hello ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    barinEven(count, name);
};

export default greetings;
