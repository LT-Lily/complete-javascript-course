# Execution Context

# 96. This

"this" keyword is created for every execution context and therefore any function.

- 1 of 3 components in the EXECUTION CONTEXT

1. Variable Environment
2. Scope chain
3. "this" keyword
   "this" always takes the value (POINTS TO) of THE OWNER of the FUNCTION in which the "this" keyword" is used.

The value of "this" depends on HOW the function is called.

When is the value of "this" assigned?
The value of "this" is assigned only when the function IS ACTUALLY CALLED

# How are functions called? (4 ways)

1. METHOD. (as a function attached to an OBJECT)
   this = points to the OBJECT that is calling the method.

EG:

const lily = {
name: "Lily",
year: 1995,
calcAge: function(){
return 2037 - this.year
}
};

lily.calcAge();

Who is calling the method?
"this" = lily

2.Simple function call
(Not attached to any object)
"this" = undefined //(Only valid for strict mode. Else, "this" --> points to GLOBAL object - in the browser "this" is the WINDOW OBJECT.

3.Arrow functions
IMPORTRANT!:
ARROW FUNCTIONS DO NOT GET THEIR OWN "this" KEYWORD

in an arrow function:
this = this of parent function. (Lexical this) - gets picked up from outer lexical scope of the arrow function.

4. Event Listener
   this = DOM element that the handler is attached to

- Other ways to call a function:
  "new"
  .call
  .apply
  .bind

# the "this" keyword is NOT:

- "this" is NEVER the function in which we are using it.
- "this" will NEVER point to the variable environment of the function.
