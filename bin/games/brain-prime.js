import { returnRandomNumber, review } from "../../src/index.js";

export const brainPrime = (count, name) => {
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    let number = returnRandomNumber();
    let result = primality(number) ? 'yes' : 'no';
    brainPrime(
        review(
            number,
            `Answer "yes" if given number is prime. Otherwise answer "no".`,
            count,
            name,
            result
        ),
        name
    )
};

function primality(n) {
 for(let i = 2; i < n; i++) {
    if(n % i === 0) return false;
 }
 return n > 1;
}