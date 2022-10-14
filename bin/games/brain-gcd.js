import { returnRandomNumber, review } from "../../src/index.js";

export const brainGcd = (count, name) => {
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    let number1 = returnRandomNumber();
    let number2 = returnRandomNumber();
    brainGcd(
        review(`${number1}, ${number2}`,'Find the greatest common divisor of given numbers.', count, 'gcd', name), name
    );
};

