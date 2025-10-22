/*
  Express
  
  What is Express.js?
  Express.js is a minimal and flexible Node.js web application framework that provides 
  a robust set of features to develop web and mobile applications. It simplifies the 
  process of handling HTTP requests, routing, middleware integration, and more.
  
  Purpose of this file:
  This file demonstrates a simple Express.js server setup. It includes middleware usage, 
  route definitions for handling different HTTP GET requests, and a catch-all route for 
  handling undefined paths. The server listens on a specified port to accept incoming requests.
  
  Middleware and its role:
  Middleware functions are functions that have access to the request and response objects 
  and can modify them or execute code before passing control to the next middleware or route handler. 
  Middleware is commonly used for logging, authentication, parsing request bodies, and more.
  
  Route definitions and HTTP methods:
  Routes define how the server responds to client requests at specific endpoints (paths) 
  and HTTP methods (GET, POST, etc.). In this example, GET routes are defined for the root path 
  ("/"), "/apple", and "/orange", each sending a distinct response.
  
  Catch-all routes:
  A catch-all route is used to handle any requests that do not match the defined routes. 
  This is useful for sending 404 Not Found responses or custom error messages.
  
  app.listen:
  The app.listen() method binds and listens for connections on the specified port. 
  It starts the server and allows it to accept incoming client requests.
*/

// Server Setup
// Import the Express.js module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen
let port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console once the server is running
    console.log(`app listening at port ${port}`);
});

/*
Note:
- The 'express' module is required to create the server.
- 'app' represents the Express application.
- The server listens on port 3000, but this can be changed as needed.
- The callback in app.listen confirms the server is running.
*/

// Middleware
// Middleware to handle all incoming requests
app.use((req, res) => {
    // Log a message indicating a request was received
    console.log("request send");

    // Send a JSON response with student details
    res.send(
        {
            studentName: "ABC",
            marks: 93,
            age: 17
        }
    )
});

/*
Note:
- Middleware functions have access to req and res objects.
- This middleware sends a JSON response for every request.
- Because this middleware sends a response, it ends the request-response cycle.
- Placing this middleware before routes will prevent routes from being reached.
*/

// Routes
// Define a GET route for the root path "/"
app.get("/", (req, res) => {
    // Send a plain text response for the root path
    res.send("response send on root path");
});

// Define a GET route for the path "/apple"
app.get("/apple", (req, res) => {
    // Send a plain text response for the "/apple" path
    res.send("response send on apple path");
});

// Define a GET route for the path "/orange"
app.get("/orange", (req, res) => {
    // Send a plain text response for the "/orange" path
    res.send("response send on orange path");
});

/*
Note:
- Routes define specific endpoints and HTTP methods.
- app.get handles GET requests to the specified path.
- Each route sends a unique response.
- Routes should be defined before any catch-all middleware.
- In this code, the middleware above will intercept all requests before these routes are reached.
*/

// Catch-All Route for 404 Errors
// Middleware to handle requests that do not match any route
app.use((req, res) => {
    // Send a 404 status and error message for unmatched paths
    res.status(404).send("This path doesn't exist");
});

/*
Note:
- This catch-all middleware handles any requests not matched by previous routes.
- It sends a 404 Not Found status with a custom message.
- It should be placed after all route definitions.
- In this code, due to the middleware above that sends a response for all requests, this catch-all will never be reached.
*/

// Path Parameters
// Define a route with dynamic segments using path parameters
app.get("/:username/:id", (req, res) => {
    // Destructure the dynamic parameters from req.params
    let { username, id } = req.params;

    // Send a response including the dynamic values
    res.send(`welcome to the page ${username} with id ${id}`);
});

/*
Note:
- Path parameters are defined using a colon (:) in the route path.
- They allow routes to capture dynamic values from the URL.
- Values are accessible via req.params as an object.
- Example URL: /govind/123 → username = "govind", id = "123".
- Useful for user profiles, product pages, or any dynamic route content.
*/

// Query Parameters
// Define a route that accepts query parameters
app.get("/search", (req, res) => {
    // Destructure the query parameter 'q' from req.query
    let { q } = req.query;  // queries are stored as key-value pairs in an object

    // If 'q' is not provided, send a fallback response
    if (!q) {
        res.send("no results found");
        return;  // ensure we exit after sending response
    }

    // Send a response showing the searched query
    res.send(`searched results for query: ${q}`);
});

/*
Note:
- Query parameters are appended to the URL after a '?' character: /search?q=example
- Multiple query parameters can be included: /search?q=example&type=user
- Values are accessible via req.query as an object.
- They are commonly used for filtering, searching, pagination, or optional inputs.
- Always check if the query exists before using it to avoid undefined errors.
*/