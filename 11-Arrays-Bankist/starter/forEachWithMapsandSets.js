// -----MAP -----
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// key: USD, value: United States dollar
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

/*  USD: United States dollar
    EUR: Euro
    GBP: Pound sterling
*/

// ----- SET -----
console.log('----- forEach with SET -----');
const currenciesUnique = new Set(['USD', 'EUR', 'EUR', 'EUR', 'GBP']);
console.log(currenciesUnique);
// Set(3) { 'USD', 'EUR', 'GBP' }

// currenciesUnique.forEach((value, key, map) => {
currenciesUnique.forEach((value, _, map) => {
  // _ underscore in JS is a throwaway (unnessary var)
  console.log(`${key}: ${value}`);
});

/*
USD: USD
EUR: EUR
GBP: GBP
*/
// the key is exactly the same as the value. Why? Set does not have keys or indices.
