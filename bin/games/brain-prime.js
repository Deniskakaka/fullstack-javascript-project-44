#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { returnRandomNumber, review } from '../../src/index.js';

function primality(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
 return n > 1;
}

const brainPrime = (count, name) => {
  if (count === 4) return;
  if (count === 3) {
  console.log(`Congratulations, ${name}!`);
    return;
  }
  const number = returnRandomNumber();
  const result = primality(number) ? 'yes' : 'no';
  brainPrime(
    review(
        number,
        `Answer "yes" if given number is prime. Otherwise answer "no".`,
        count,
        name,
        result,
    ),
    name,
  );
};

const action = () => {
  const count = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  brainPrime(count, name);
};

action();
