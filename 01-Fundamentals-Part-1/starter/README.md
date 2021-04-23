BEST PRACTICE for clean code:

Always use const by default and only use let when really sure that the variable needs to change in the future.It is good practice to have little variable mutations or variable changes as possible because changing variables introduces potential to create bugs.

var AVOID
Understand it for legacy reasons:old way of defining variables prior to ES6. Works the same as let. Can be mutated.

let is block-scoped
var is function-scoped
Always properly declare a variable with const or let.

BAD PRACTICE: 
(This will still execute but it will not create a variable in the scope. Instead, JS will create a property on the global object. )
lastName = "Tan";
console.log(lastName);
