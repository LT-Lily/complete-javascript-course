const calcAge = (birthYear) => 2080 - birthYear;
// 1 parameter
// return is implicit

//call
console.log(calcAge(1995));

// Calculate how many years a person has left until retirement
const yearsTilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const yearsLeft = 70 - age;
  return `${firstName} will retire in ${yearsLeft} years.`;
};
console.log(yearsTilRetirement(1995, "Lily"));
// calculate age
// retirement - current age
