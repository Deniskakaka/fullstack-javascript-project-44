#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { review, returnRandomNumber } from '../../src/index.js';

function isEven(value) {
  if (value % 2 == 0) return true;
  else return false;
}

const barinEven = (count, name) => {
  if (count === 4) return;
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const number = returnRandomNumber();
  const result = isEven(number) ? 'yes' : 'no';
  barinEven(
    review( number, 'Answer "yes" if the number is even, otherwise answer "no".', count, name, result), name
  );
};

const action = () => {
  const count = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  barinEven(count, name);
};

action();
