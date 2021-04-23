const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// Set { 'Pasta', 'Pizza', 'Risotto' }
// pass in an ITERABLE: (most common: Array). Strings are also ITERABLES

console.log(new Set('Lilllllly'));

console.log(ordersSet.size);
console.log(ordersSet.has('Bread')); // false

// add new element to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// delete element from set
ordersSet.delete('Risotto');
console.log(ordersSet);

// retrieve values from set
console.log(ordersSet[0]); // Undefined
// no way of getting values out of sets.
// Most important to know is: Is value in set?
// Goal: store value then retrieve, just use an array.

// delete ALL elements of set
// ordersSet.clear();
// console.log(ordersSet);

// sets are also iterables, therefore we can loop over htem

for (const order of ordersSet) console.log(order);

// Main use case for sets: REMOVE duplicate values of arrays

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// We want to know which position they are in the restaurant
// We want a UNIQUE array.
// const staffUnique = new Set(staff);
// console.log(staffUnique); // Set { 'Waiter', 'Chef', 'Manager' }

// CONVERT SET --> ARRAY
// spread operator works on all iterables

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// OR
const staffSpreaded = [...staffUnique];
console.log(staffSpreaded); // [ 'Waiter', 'Chef', 'Manager' ]

// How many positions?
console.log(new Set(staff).size);

// Count letters in name (string)
console.log(new Set('lilynobu').size);
