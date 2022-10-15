#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { review, returnRandomNumber } from "../../src/index.js";

export const barinEven = (count, name) => {
  if (count === 4) return;
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  let number = returnRandomNumber();
  let result = isEven(number) ? 'yes' : 'no';
  barinEven(
    review( number, 'Answer "yes" if the number is even, otherwise answer "no".', count, name, result), name
  );
};

function isEven(value) {
    if (value % 2 == 0) return true;
    else return false;
}

const action = () => {
    let count = 0;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name?:');
    console.log(`Hello ${name}!`);
    barinEven(count, name);
};

action();