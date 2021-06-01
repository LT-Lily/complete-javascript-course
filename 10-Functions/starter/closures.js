const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`No. of passengers:${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
//prerequisites:
// execution context, call stack, scope chain
// a closure is not a feature we explicitly use. Not created manually. Happens in certain situations. Recognise them.

// start line 10. secureBooking();
//CALLSTACK:
//- current in Global EC.
// What does the GLOBAL SCOPE CONTAIN? secureBooking f()
// secure booking is executed. + New Execution Context(EC) on CALLSTACK / EXECUTION STACK. Each EC has var environment.

// !!!! A Closure makes a function REMEMBER all the variables that existed at the functions birth place.
// (secureBooking) is the birth place of booker funct()

// EC of secureBooking() is on longer on call stack. Finished execution long ago.

// booker() is called.
// booker()EC added to call stack. variable env EMPTY. How does it access let passengerCount? Not in Scope Chain.
// !!!!!!The secret of CLOSURE: Any function ALWAYS HAS ACCESS TO THE VARIABLE ENVIRONMENT of the EXECUTION CONTEXT IN WHICH THE FUNCTION WAS CREATED.
// Where is the variable environment of EC in which booker was created? the variable environment passengerCount is in secureBoooking()
