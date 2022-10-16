import readlineSync from 'readline-sync';

const check = (answear, count, name, right) => {
  if (answear === right) {
    console.log('Correct!');
    count += 1;
    return count;
  }
  console.log(
    `${answear} is wrong answer ;(. Corect answer was ${right}. Let's try again, ${name}!`,
  );
  return 4;
};

export const review = (extension, startQuestion, count, name, right) => {
  if (count === 0) console.log(`${startQuestion}`);
  console.log(`Question: ${extension}`);
  const answear = readlineSync.question('Your answear:', 10);
  return check(!parseInt(answear) ? answear : +answear, count, name, right);
};

export const returnRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};
