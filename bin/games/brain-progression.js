#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { returnRandomNumber, review } from "../../src/index.js";

export const brainProgression = (count, name) => {
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    let array = [];
    let randomNumber = returnRandomNumber();
    let randomEnlarger = returnRandomNumber(1, 5);
    let answear = 0;
    for (let  i = 0; i <= randomNumber; i += randomEnlarger) {
        array.push(randomNumber + i);
    }
    let result = array.map((el, index) => {
        if (index === randomEnlarger) {
            answear = el;
            el = '..';
        } 
        return el;
    }).slice(0, 10).join(' ');

    brainProgression(
        review(
        result,
        "What number is missing in the progression?",
        count,
        name,
        answear
        ),
        name
    );
};

const action = () => {
    let count = 0;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    brainProgression(count, name);
};

action();