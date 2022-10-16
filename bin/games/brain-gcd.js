#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { returnRandomNumber, review } from '../../src/index.js';

const getDivider = (number) => {
  const result = [];
  for (let i = 1; i <= number; i++) if (number % i === 0) result.push(i);
  return result;
};

const brainGcd = (count, name) => {
  if (count === 4) return;
  if (count === 3) {
  console.log(`Congratulations, ${name}!`);
    return;
  }
  const number1 = returnRandomNumber();
  const number2 = returnRandomNumber();
  const dividers = getDivider(number1).concat(getDivider(number2));
  const countItems = dividers.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  const result = Math.max.apply(
    null,
    Object.keys(countItems)
        .filter((item) => countItems[item] > 1)
        .map((el) => +el),
    );
  brainGcd(
    review(
        `${number1} ${number2}`,
        'Find the greatest common divisor of given numbers.',
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
  brainGcd(count, name);
};

action();
