DOM

Test Code

// log to console
console.log(document.querySelector('.message').textContent);
// set content to something else
document.querySelector('.message').textContent = 'Make a guess';

const number = (document.querySelector('.number').textContent = 13);
const score = (document.querySelector('.score').textContent = 10);
console.log(number);
console.log(score);

const input = document.querySelector('.guess').value;
console.log(input);

console.log((document.querySelector('.guess').value = 23));

// Notes:
let score = 0;
Make data available in code not just in DOM
