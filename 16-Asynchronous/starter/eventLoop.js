console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

// promise that resolves immediately
//build a promise that resolves immediately with success value
// handle it with .then - callback with resolved val as argument
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');
