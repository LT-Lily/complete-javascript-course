console.log('Lily Tan'.split(' ')); // =>[ 'Lily', 'Tan' ]
// split and join
const [firstName, lastName] = 'Lily Tan'.split(' ');
console.log(firstName, lastName);

// join

const newName = ['Miss', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //=> Miss Lily TAN
//======================
// capitalize the first letter of each word
// multiple words - split to capitalize 1 by one
// join the rest of the word
// put it into an array
// join(" ") it back together

// Method 2 Solution:
// Replace the first letter of each word with the first letter capitalized.
const capitalizeName = function (name) {
  const names = name.split(' '); // => arr
  const namesUpper = [];
  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('queen elizabeth the third');
