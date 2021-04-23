Call Back Hell

AJAX call -
Multiple AJAX calls made - running in parallel, could not control which would finish first.

Make it so that the 2nd one runs only when 1st one has finished
Eg:

2nd AJAX call will depend on the 1st one.
properties: borders
Get the Country and Neighbour

More requests in sequence = callback hell
callbacks within callbacks
Callback hell is when there a lot of nested callbacks inorder to execute asynchronous tasks IN SEQUENCE. Happens with ALL asynchronous tasks handled by callbacks (not just AJAX calls()).

# .setTimeout

a function to be executed after the timer expires

Solution to Callback hell:

# PROMISES

Old: XMLHttp function
New: Modern way of making AJAX calls: Fetch Api

# What is a Promise?

Definitions: (formal-> informal)

- An object that is used as a placeholder for the FUTURE RESULT of an asynchronous operation.

- A promise is like a container for asynchronously delivered value.

- A promise is a CONTAINER for a FUTURE VALUE.

- An example of a future value is the response from an AJAX call.
  What can we do with it?
  A promise can be used to handle the future value of an AJAX call.

Analogy
A promise is like a lottery ticket:
I buy the promise that I will recieve some amount of money in the future if I guess the correct outcome.
I will recieve money if I guess the correct outcome.

Promise = I buy lottery ticket now
Lottery draw happens asynchronously
If outcome is correct - receive money because it was promised.

# Advantage of using promises

- 1. No longer need ot rely on events and callbacks passed into asynchronous functions to handle asynchronous results.
     Events and callbacks can sometimes cause unpredictable results.
- 2. Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

# Lifecycle of a Promise

Since promises happen ASYNCHRONOUSLY, they are time sensitive and can have different STATES.

# Before future value is available: PENDING

In this state, Asynchronous task is still working in the background. (Analogy: Asynch task = lottery)

# Asnychronous task is finished: SETTLED

There are 2 types of SETTLED promises:

- 1. FULFILLED
     A promise that has successfully resulted in a value as expected. Eg. when using a promise to fetch data from API. Fulfilled data: successfully got data to be used.
- 2. REJECTED
  - An error from the Asynchronous Task. Eg. fetching data from API. User is offline and can't connect to the server.

We are able to HANDLE these different states in our code.

# A promise is only SETTLED ONCE. State will remain unchanged forever. It can either be FULFILLED or REJECTED but it is impossible to change that state.

Relevant when USING a promise =

# 1. BUILD PROMISE

in order for promise to exist in the first place
Eg FETCH API builds and (returns) a promise for us to consume

# 2. CONSUME a PROMISE

We consume a promise when we already have a promise.
E.g. promise returned from FETCH API.

# Handle a fulfilled promise

const getCountryData = function(country){
fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){

    });

}
// as soon as request starts, promise is returned
// start: Pending. async task still running
// Settled : fulfilled || rejected
// (assume success)
// use .then to handle FULFILLED state
// pass .then callback function to be executed as soon as promise is FULFILLED (as soon as result is available)
// the callback function takes 1 arg once called by JS: arg = [resulting value of FULFILLED promise]. (In this case it is a response of an AJAX call)

/_ OLD METHOD
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
_/

/_ NEW METHOD _/
// simple GET request
// for more complex AJAX calls, fetch(OBJECTS) possible
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);
// => Promise

// CONSUME

const getCountryData = function (country) {
fetch(`https://restcountries.eu/rest/v2/name/${country}`)
.then(function (response) {
console.log(response);
// Type of OBJECT is a Response
// Data is in the Response.body
// ReadableStream
//.json method available on all responses of the fetch function (all of the resolved values).
//.json is also an asynchronous function - therefore also returns a new promise --> needs to be handled as well

      return response.json();
      // new promise -> to be handled --> .then
    })
    .then(function (data) {
      console.log(data);
    });

};

getCountryData('portugal');
// as soon as request starts, promise is returned
// start: Pending. async task still running
// Settled : fulfilled || rejected
// (assume success)
// use .then to handle FULFILLED state
// pass .then callback function to be executed as soon as promise is FULFILLED (as soon as result is available)
// the callback function takes 1 arg once called by JS: arg = [resulting value of FULFILLED promise]. (In this case it is a response of an AJAX call)

# A promise does not get rid of callbacks but it gets rid of CALLBACK HELL
