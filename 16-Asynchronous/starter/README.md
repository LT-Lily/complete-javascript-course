AYNCHRONOUS JS:
- Promises
- Async/await
- Ajax

AJAX and APIs
Most popular use case of asynchronous JS: making AJAX-calls to APIs


# Execution THREAD
 - part of execution contex that actually executes the code in computer's CPU.
 - Each line waits for the previous line to finish execution.
 - Eg. Problem with SYNCHRONOUS code:  an alert() function blocks execution of next line.

 # BACKGROUND
 - TIMER RUNNING without main code executing


# Synchronous Code -
 executed line by line in the exact order that we defined in our code.

# Asynchronous Code
AYSYNCHRONOUS = NOT OCCURRING AT THE SAME TIME
- is executed AFTER a task that runs in the BACKGROUND finishes.
- non blocking
- callback function runs at the end - action defered to make the code non blocking. 
# NOTE: callback functions alone DO NOT automatically make code asynchronous.
# NOTE: event listeners alone DO NOT automatically make code asynchronous. It is just WAITING in the background for an event but not DOING anything.

 eg. [1,2,3].map(v => v * 2); <- NOT ASYNCHRONOUS
# - Summary: all about coordinating behaviour of our program over a certain period of time

# EG: ============= Timer with a callback ==========
- setTimeout is asynchronous

const p = document.querySelector(".p");
setTimeout(function(){
    p.textContent = "My name is Jonas!";
}, 5000);
p.style.color = "red";
 
  # callback runs after timer

# EG: ========= Asynchronous image loading with event and callback ==========

const img = document.querySelector(".dog");
img.src = "dog.jpg"; // ASYNCHRONOUS = loading an image in the background while the rest of the code keeps running
img.addEventListener("load", function(){  // when done load even automatically emitted by JS
    img.classList.add("fadeIn");
});
p.style.width = "300px";


# SUMMARY
# Examples of ASYNCHRONOUS BEHAVIOUR:
- Loading an image in the background
- setTimer function
- Geolocation API or AJAX calls
# MOST IMPORTANT USECASE of ASYNCHRONOUS JAVASCRIPT: AJAX CALLS

# AJAX

Asynchronous Javascript And XML:
Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can REQUEST data from web servers dynamically.

- AJAX calls are made in our code to REQUEST DATA WITHOUT RELOADING the page so that we can use that data in our application dynamically


Next lesson:
Make AJAX calls to request data about countries.
--> then use that data about coutnries to build us a small application that shows us information about the country that we are currently in. 

How does AJAX work?

CLIENT ----REQUEST(ask for data)---> WEB SERVER(has the data)

Eg. JS application running in browser, also called CLIENT
- We want application to GET some data from a web server. Eg. data about countries.
- With AJAX - do a HTTP request to the WEB SERVER which has the data. The server sends back a response containing requested data.
- This happens ASYNCHRONOUSLY in the background
- There are diff types of requests: GET(request to recieve data ) or POST(send data to server)
- When asking Web Server to send data, this server usually contains a WEB API.
- This WEB API is the one that HAS THE DATA

# API
Application Programming Interface:
Piece of software that can be used by another piece of software in order to allow applications to talk to each other and exchange information.
- true for not only for web development and JS but for programming in general.
- in JS and web dev - diff types of APIs: eg.:
# DOM API, Geolocation API, OWN CLASS API, ONLINE API
- Can always implement a small and simple API in a class where we make some methods available as a public interface.
- OBJECTS made from a CLASS can be seen as SELF-CONTAINED, ENCAPSULATED PIECES OF SOFTWARE that OTHER pieces of software can interact with. -> FITS THE DEFINITION OF AN API.
- Self-contained piece of software that allow other pieces of software to interact with them

- Type of API interested in when using AJAX:
# ONLINE API (made up term)
- An application running on a web server which receives requests for data, then retrieces this data from some database and then sends it back to the client.
- When building applications in practice, we simply call these online APIs, API. 
# The term WEB API is also used for other things

- We can build our own web-apis - requires back-end development (development with servers and databases etc.)
- eg. Node.js or user 3rd-part APIs.

- FUTURE: SEE: NODE.JS COURSE
- Now: interested in 3rd party APIs(other developers make available for us) - Mostly FREE.

Eg. Building travelling application - have a database with different destinations and tours 
- build own API that can receive request from FRONT-END application in JAVASCRIPT and send back the results. Own API, hosted on OWN server. May not be enough to build own application. Could also use some 3rd-party APIs.
There are APIs for everything - weather data, data about countries, flights data, currency conversion data, apis for sending email or sms, google maps, etc etc.

# APIs are what made the modern web possible in the first place.

# API Data formats:
AJAX
XML - Data format USED to be widely used to transmit data on the web. Not used anymore.

# JSON data format. 
JS Object converted to a string.
easy to send across the web and use in JS once the data arrives.
============================================================

# 243. Our first AJAX call Request: XMLHttpRequest


// There are mayn ways of doing AJAX calls iN JS
// OLD SCHOOL METHOD: XML HTTP request function

# Modern way of handling asynchronous JS:
- feature: PROMISES

There's an API for everything
 https://github.com/public-apis/public-apis 
 Is it Authenticated?
 HTTPS?
 CORS? - should always be set to YES or Unknown
 CORS(Cross Origin Resource Sharing) - 
 # WITHOUT CORS WE CANNOT ACCESS A THIRD PARTY API from our own code.

 Select REST Countries. 
 DOCS: https://restcountries.eu/
 Auth - no
 HTTPS - yes
 CORS - unknown

 # API Documentation instructions:
 # Look for API endpoints
 # Endpoint
 - Another name for the URL that we need.

// I want to SEARCH THE API by COUNTRY NAME

// Reuse the same code to create a country card for multiple countries