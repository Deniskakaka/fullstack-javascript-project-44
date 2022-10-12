import { returnRandomNumber, test } from "../../src/index.js";

export const brainCalc = (count, name) => {
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    let random1 = returnRandomNumber();
    let random2 = returnRandomNumber();
    let sing = randomSing();
    brainCalc(test(`${random1} ${sing} ${random2}`, 'What is the result of the expression?', count, 'calc'), name);
};

const randomSing = () => {
    let myArray = ['+', '-', '*'];
    let rand = Math.floor(Math.random()*myArray.length);
    return myArray[rand];
}