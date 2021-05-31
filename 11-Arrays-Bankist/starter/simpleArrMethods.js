'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice: does not mutate original array.
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
console.log(arr.slice(-2)); //[ 'd', 'e' ]
console.log(arr.slice(1, -1)); // [ 'b', 'c', 'd' ]
console.log(arr);

// Ways to get a shallow copy of the array:
console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e' ]
// slice is good for chaining.
// or
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]

// splice: MUTATES original array. !!!
console.log('---SPLICE--');
// console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
// console.log(arr); // [ 'a', 'b' ]
// usually interested in deleting 1 or more elements, not the result of splice.

// common use-case:
// remove last element of an array:
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); // [ 'b', 'c' ]

console.log(arr); // [ 'a', 'b', 'c', 'd' ]

// REVERSE : MUTATES original array !!!

console.log('---REVERSE--');

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['k', 'j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j', 'k' ]

// CONCAT : 👌DOES NOT MUTATE ORIGINAL ARRAY
// - concatenate 2 arrays
console.log('---CONCAT--');

const letters = arr.concat(arr2);
console.log(letters);
// [
//     'a', 'b', 'c', 'd',
//     'e', 'f', 'g', 'h',
//     'i', 'j', 'k'
//   ]

// OR

console.log([...arr, ...arr2]);

// JOIN

console.log('---JOIN--');

console.log(letters.join()); // a,b,c,d,e,f,g,h,i,j,k
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j-k
console.log(...letters); // a b c d e f g h i j k
