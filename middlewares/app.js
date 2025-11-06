const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Set EJS as templating engine and specify views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ----------------- Global Middleware -----------------
// This middleware does not call next(), so it ends the request-response cycle
// It sends a response for every request, preventing any subsequent middleware or routes from running
app.use((req, res) => {
    res.send("Middleware Working");
});

// Middleware-1 logs a message and calls next() to pass control to the next middleware or route
// next() is crucial to continue the middleware chain instead of ending the request-response cycle
app.use((req, res, next) => {
    console.log("Middleware-1");
    next(); // Pass control to next middleware or route
});

// Middleware-2 also logs and calls next(), demonstrating middleware chaining
app.use((req, res, next) => {
    console.log("Middleware-2");
    next(); 
});

// Logger middleware adds a timestamp to the request object and logs request details
// This is an example of custom middleware that enriches the request object and logs info
// It calls next() to continue the chain
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toDateString();
    console.log(req.method, req.hostname, req.path, req.time); 
    next();
});

// ----------------- Route-Specific Middleware -----------------
// Middleware applied only to requests starting with "/random"
// Demonstrates route-specific middleware that only runs for matching routes
// Calls next() to continue processing
app.use("/random", (req, res, next) => {
    console.log("Middleware working for /random route");
    next();
});

// ----------------- Routes -----------------
// Render a form at /access route using EJS template
app.get("/access", (req, res) => {
    res.render("access.ejs"); // Render form for token input
});

// ----------------- Middleware for Token Validation -----------------
// Custom middleware to check for token query parameter before allowing access to /api route
// Demonstrates how middleware can protect routes by validating requests before reaching route handler
// Throws an error if token is invalid or missing, otherwise calls next() to proceed
const checkToken = ("/api", (req, res, next) => {
    const { token } = req.query;

    if (!token) return res.send("Please provide an access token."); // No token provided

    if (token.trim().toLowerCase() === "giveaccess") return next(); // Valid token, allow access

    throw new Error("ACCESS DENIED!"); // Invalid token, trigger error handler
});

// Protected /api route uses checkToken middleware to restrict access
app.get("/api", checkToken, (req, res) => {
    res.send("Access granted! Here's your data.");
});

// Simple root route
app.get("/", (req, res) => {
    res.send("Root Route");
});

// Route for /random path
app.get("/random", (req, res) => {
    res.send("Random Page");
});

// ----------------- Catch-All Middleware -----------------
// This middleware handles any requests that do not match above routes
// It sends a "Page not Found!" response, effectively acting as a 404 handler
// Because it does not call next(), it ends the request-response cycle here
app.use((req, res) => {
    res.send("Page not Found!");
});

// Start the server and listen on specified port
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});