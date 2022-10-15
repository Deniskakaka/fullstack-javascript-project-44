import readlineSync from 'readline-sync';

export const review = (extension, startQuestion, count, type, name, right) => {
    count === 0 && console.log(`${startQuestion}`);
    console.log(`Question: ${extension}`);
    const answear = readlineSync.question('Your answear:');
    if (type === 'even') count = checkEven(answear, count, name, right);
    if (type === 'calc') count = checkCalc(answear, extension, count, name, right);
    if (type === 'gcd') count = checkGcd(answear, extension, count, name, right);
    if (type === 'progress') count = checkProgress(answear, count, name, right);
    return count;
};

export const returnRandomNumber = (min = 1, max = 100) =>
    Math.floor(Math.random() * (max - min) + min);

const checkProgress = (answear, count, name, right) => {
    if (+answear === right) {
        console.log('Correct!');
        return ++count;
    } else {
        console.log(`${answear} is wrong answer ;(. Correct answer was ${right}. Let's try again, ${name}!`,);
        return 4;
    }
};

const checkEven = (answear, count, name, right) => {
    if (answear === right) {
       console.log('Correct!');
       return ++count;
    } else {
        console.log(
            `${answear} is wrong answer ;(. Correct answer was ${
                answear === 'yes' ? 'no' : 'yes'
            }. Let's try again, ${name}!`,
        );
       return 4;
    }
};

const checkCalc = (answear, extension, count, name, right) => {
    if (right === +answear) {
        console.log('Correct!');
        return ++count;
    } else {
        console.log(
            `${answear} is wrong answer ;(. Correct answer was ${right}. Let's try again, ${name}!`,
            );
        return 4;
    }
};

const checkGcd = (answear, extension, count, name, rigth) => {
    if (rigth === +answear) {
        console.log('Correct!');
        return ++count;
    }
    else {
        console.log(`${answear} is wrong answer ;(. Correct answer was ${rigth}. Let's try again, ${name}!`);
        return 4;
    }
};