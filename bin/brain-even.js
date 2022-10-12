import readlineSync from 'readline-sync';

export const barinEven = (count, name) => {
    let number = returnRandomNumber();
    if (count === 4) return;
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
    }
    console.log(`Question: ${number}`);
    const answear = readlineSync.question(`Your answer:`);
    if (isEven(number) && answear === 'yes' || !isEven(number) && answear === 'no') {
        ++count;
        console.log('Correct!');
    }
    if (isEven(number) && answear === 'no' ) {
        count = 4;
        console.log(`${answear} is wrong answer ;(. Correct answer was 'yes'.`)
    }
    if (!isEven(number) && answear === 'yes') {
        count = 4;
        console.log(`${answear} is wrong answer ;(. Correct answer was 'no'.`);
    }
    barinEven(count, name);
}

function isEven(value){
    if (value % 2 == 0)
        return true;
    else
        return false;
}

const returnRandomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);