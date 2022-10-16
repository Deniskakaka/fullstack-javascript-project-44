import readlineSync from 'readline-sync';

export const review = (extension, startQuestion, count, name, right) => {
  if (count === 0) console.log(`${startQuestion}`);
  console.log(`Question: ${extension}`);
  const answear = readlineSync.question('Your answear:');
  count = check(!parseInt(answear) ? answear : +answear, count, name, right);
  return count;
};

export const returnRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min) + min);

const check = (answear, count, name, right) => {
  if (answear === right) {
    console.log('Correct!');
    return (count += 1);
  } 
  console.log(
    `${answear} is wrong answer ;(. Correct answer was ${right}. Let's try again, ${name}!`,
  );
  return 4;
};
