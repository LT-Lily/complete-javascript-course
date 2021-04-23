// Padding
// .padStart
// .padEnd
// .repeat
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
// => +++++++++++Go to gate 23!
// we want string to be 25 characters long
// .padStart([no. of char], pad string with)

console.log(message.padStart(25, '+').padEnd(30, '*'));
// => +++++++++++Go to gate 23!*****

// Mask Credit Card
// convert number to a string
// const str = String()
// take out last 4 numbers
// padStart to create string with same length
const maskCreditCard = function (number) {
  const str = number + ''; // string conversion
  // when 1 operand of + sign is string, converts all to string
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, '*');
};
console.log(maskCreditCard(123345780)); // => *****5780
maskCreditCard('98357495');

// Repeat the same string multiple times
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(4));
