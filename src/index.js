import readlineSync from 'readline-sync';

export const review = (extension, startQuestion, count, type) => {
   count === 0 && console.log(`${startQuestion}`);
   console.log(`Question: ${extension}`);
   const answear = readlineSync.question('Your answear:');
   if (type === 'even') {
      if (isEven(answear) && answear === 'yes' || !isEven(answear) && answear === 'no') {
         ++count;
         console.log('Correct!');
      } else {
         count = 4;
         console.log(`${answear} is wrong answer ;(. Correct answer was ${ answear === 'yes' ? 'no' : 'yes' }.`)
      }
   }
   if (type === 'calc') {
      if (+answear === NaN) count = 4;
      if (eval(extension) === +answear) {
          ++count;
          console.log('Correct!');
      } else {
          count = 4;
          console.log(`${answear} is wrong answer ;(. Correct answer was ${eval(extension)}.`)
      }
   }
   return count;
};

function isEven(value){
   if (value % 2 == 0)
       return true;
   else
       return false;
};

export const returnRandomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);