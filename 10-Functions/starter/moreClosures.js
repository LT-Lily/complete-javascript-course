// EG: Don't need to return funct() from another funct() IS NOT A CRITERIA to create a closure.

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

cosnt h = function(){
    // reassign f
    const b = 777;
    f = function () {
        console.log(b * 2);
      };
}
g(); // g is no longer there
f(); // a is the VE of g. a is in backpack of f.
