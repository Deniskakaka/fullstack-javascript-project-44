import readlineSync from 'readline-sync';

export const review = (extension, startQuestion, count, type, name) => {
    count === 0 && console.log(`${startQuestion}`);
    console.log(`Question: ${extension}`);
    const answear = readlineSync.question('Your answear:');
    if (type === 'even') count = checkEven(answear, count, name);
    if (type === 'calc') count = checkCalc(answear, extension, count, name);
    if (type === 'gcd') count = checkGcd(answear, extension, count, name);
    return count;
};

function isEven(value) {
    if (value % 2 == 0) return true;
    else return false;
}

export const returnRandomNumber = () =>
    Math.floor(Math.random() * (100 - 1) + 1);

const checkEven = (answear, count, name) => {
    if ((isEven(answear) && answear === 'yes') || (!isEven(answear) && answear === 'no')) {
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

const checkCalc = (answear, extension, count, name) => {
    if (eval(extension) === +answear) {
        console.log('Correct!');
        return ++count;
    } else {
        console.log(
            `${answear} is wrong answer ;(. Correct answer was ${eval(
                extension,
            )}. Let's try again, ${name}!`,
            );
        return 4;
    }
};

const checkGcd = (answear, extension, count, name) => {
    let dividers = getDivider(+extension.split(',')[0]).concat(getDivider(+extension.split(',')[1]));
    const countItems = dividers.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    const result = Object.keys(countItems).filter((item) => countItems[item] > 1).map(el => +el);
    if (Math.max.apply(null, result) === +answear) {
        console.log('Correct!');
        return ++count;
    }
    else {
        console.log(`${answear} is wrong answer ;(. Correct answer was ${Math.max.apply(null, result) }. Let's try again, ${name}!`);
        return 4;
    }
}

const getDivider = (number) => {
    const result = [];
    for (let i = 1; i <= number; i++) if (number % i === 0) result.push(i);
    return result;
}