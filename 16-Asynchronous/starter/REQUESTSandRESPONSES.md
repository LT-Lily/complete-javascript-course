245.

How the web works behind the scenes.

# The Request-response model

# OR

# Client-server architecture

Step

1.  DNS <==(dns lookup)==>CLIENT(eg. browser) <==(REQUEST/RESPONSE)==> WEB SERVER
    Step 2.
    CLIENT(eg. browser) <--TCP/IP socket connection--> WEB SERVER

Process same with webpage or Web APIS or

# CLIENT

https://restcountries.eu/rest/v2/name/${country}

# https:

Protocol (HTTP or HTTPs)

# domain name

restcountries.eu
Real: eg. 104.27.132.889.433 (433 = PORT NUMBER)

# THE DOMAIN IS NOT THE REAL ADDRESS. A DNS will CONVERT DOMAIN NAME --> REAL IP ADDRESS --> sent back to BROWSER. --> CALL it.

Human readable. Need way of converting Domain name into REAL address of server. That conversion happens through DNS(Domain Name Server).

# DNS

a special kind of server. (Phone books of the Internet.)

# The FIRST STEP

that happens when we access any Web server: The browser makes a request to a DNS. This special server will simply match the web address of the URL --> to the REAL IP address. Happens through ISP(Internet Service Provider)
Once the REAL IP ADDRESS --sent back to--> BROWSER --> call it.

# the last digits of IP address : PORT NUMBER

- to identify a specific service that is running on a server. Think of it liek a subaddress. ( has nothing to do wtih /rest/V2 resource)
- That resource will be sent over int he HTTP request

# Resource

- that we want to access:
  /rest/v2/name/${country}

# STEP 2

Once Browser has the IP Address, a

# TCP socket connection is established between the browser and the server.

Typically kepty alive for the entrie time that it takes to transfer all files of Website or of all data

# TCP/IP

Transmission
Communication
Protocol

Internet
Protocol

Together, they are communication protocols that define exactly how data travel across the web. The INTERNET'S FUNDAMENTAL CONTROL SYSTEM. They set the rules about HOW DATA MOVES on the internet.

# Step 3: Make the request

Make HTTP request
Hypertext
Transfer
Protocol
HTTP -
is another communication protocol.

- a protocol that allows CLIENTS and SERVERS to communicate. Works by sending requests from CLIENT to SERVER and back.
  A communication protocol
- is a SYSTEM of rules that allows 2 or more parties to communicate

---

A REQUEST MESSAGE looks like this:

# Start line: Http METHOD used in the request + request target + HTTP version

GET /rest/v2/alpha/PT HTTP/1.1

# HTTP request HEADER (many different possibilities)

Host
User-Agent:
Accept-Language:

# Request BODY (only when sending data to server e.g. POST)

<BODY>
 - body contains that data that we are sending. Eg. coming from a HTML form.
---------------------------------------
REQUEST MESSAGE detailed NOTES:

# Start line

- Note: there are many HTTP methods.
- Most important requests:
  GET
  POST
  PUT
  PATCH - modify data
  HTTP request is not only for GETting data. Can also be used to send.

# Request target

This is where the server is told: "We want to access:
/rest/v2/alpha/PT resource."

- It is sent as TARGET in the HTTP request.
- The SERVER then figures out what to do with it.

IF TARGET IS EMPTY:
" / "
accessing website's ROUTE : restcountries.eu

# HTTP request HEADER (many different possibilities)

INFO that we sent about the REQUEST itself.
Eg. What browser is used to make the request.
What time?
Users langauge?

Developers do not manually write these HTTP requests.

# HTTPS vs HTTP

HTTPS: encrypted using TLS or SSL (protocols)
logic still applies.
