import { review, returnRandomNumber } from "../../src/index.js";

export const barinEven = (count, name) => {
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    let number = returnRandomNumber();
    barinEven(review(number, 'Answer "yes" if the number is even, otherwise answer "no".',  count, 'even'), name);
};