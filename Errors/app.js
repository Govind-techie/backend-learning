const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./expressError.js");

/* 
Note: In Express, middleware functions are executed sequentially. 
Normal middleware handles requests and responses, while error-handling middleware
is designed specifically to catch and process errors passed via next(err).
*/

/* 
   Error Handling Middleware #1
This middleware is intended to handle errors by sending a 404 status code and the error message.
However, placing this at the top is unusual because it will catch errors before other handlers.
Typically, error handlers are placed after all routes to catch errors generated anywhere.
This middleware demonstrates a specific status code usage, but it is overridden by later handlers.
*/
app.use((err, req, res, next) => {
    // Sends the error message in a human-readable format with a custom status code (404 here).
    // This middleware will handle any error passed down before others, which might not be ideal.
    res.status(404).send(err.message);
});

/* 
   Route that triggers an error
This route explicitly creates an ExpressError with status 401 (Unauthorized) and passes it to next()
This triggers Express's error-handling flow, skipping normal middleware and going straight to error handlers.
*/
app.get("/api", (req, res, next) => {
    const err = new ExpressError(401, "Unauthorized User");
    next(err); // Passing error to the next error-handling middleware
});

/* 
   Error Handling Middleware #2
This is a more general error handler designed to catch any errors that occur in routes or middleware.
It assigns a default status code of 500 (Internal Server Error) if none is provided by the error object.
This middleware is placed after route definitions to catch errors thrown or passed via next(err).
*/
app.use((err, req, res, next) => {
    // Destructure status and message from error, default status to 500 if undefined.
    let {status = 500, message} = err;

    // Send the error response with the appropriate HTTP status code and message.
    res.status(status).send(message); 
});

/* 
   Route that throws an error synchronously
This route demonstrates throwing an error directly within a route handler.
Express will catch synchronous errors and pass them to the error-handling middleware.
*/
app.get("/admin", (req, res, next) => {
    throw new ExpressError(403, "Access to admin forbidden");
});

/* 
   Error Handling Middleware #3
Another error handler with the same logic as the previous one.
Having multiple error handlers like this is redundant and may cause confusion.
Typically, only one centralized error handler is used at the end of middleware stack.
This might be here for demonstration or accidentally duplicated.
*/
app.use((err, req, res, next) => {
    let { status = 500, message } = err;
    res.status(status).send(message);
});

/* 
   Handling Async Errors in Express
Express does not automatically catch errors thrown in asynchronous callbacks or promises.
To handle async errors, you must pass them to next(err) explicitly.
The following route shows an example where an error is thrown inside a setTimeout callback.
*/
app.get("/err", (req, res, next) => {
    // Simulate an asynchronous operation (e.g., DB call, API request, file read)
    setTimeout(() => {
        try {
            // Something goes wrong inside async callback
            throw new Error("something went wrong!"); // Custom-made async error
        } catch (err) {
            // Pass errors to Express error handling middleware
            // next(err) signals Express to skip normal middleware and call error-handling middleware.
            next(err);
        }
    }, 1000);
});

/* 
   wrapAsync Utility Function
To avoid repetitive try/catch blocks in async route handlers,
asyncWrap is a higher-order function that automatically catches async errors and forwards them to Express.
This ensures cleaner and more maintainable code when working with async/await.
*/
function wrapAsync(fn) {
    // Returns a new function that Express can call as a route handler.
    // It calls the async function (fn) and automatically catches any errors.
    return function (req, res, next) {
        // If the Promise returned by fn() rejects, the .catch() sends the error to Express's error-handling middleware using next(err).
        fn(req, res, next).catch((err) => next(err));
    };
}

/* 
   Example route using asyncWrap to handle async errors
This route simulates an asynchronous failure by rejecting a promise.
asyncWrap ensures the rejection is caught and passed to the centralized error handler.
*/
app.get("/asyncExample", wrapAsync(async (req, res, next) => {
    // Simulate an asynchronous operation that fails.
    // Instead of using try/catch, we directly throw or reject a Promise.
    // asyncWrap will catch this rejection and forward it to the global error middleware.
    await Promise.reject(new ExpressError(500, "Async operation failed"));

    // This line will never be reached because the Promise above rejects.
    res.send("This will never be reached");
}));

/* 
   Summary Notes on Express Error Handling:
1. Normal middleware handles requests and responses; error-handling middleware handles errors passed via next(err).
2. Error-handling middleware is defined with four arguments: (err, req, res, next).
3. Errors can be generated by throwing synchronously, passing an error to next(err), or rejecting promises.
4. Async errors are not caught by Express automatically; asyncWrap or manual try/catch with next(err) is needed.
5. The order of middleware matters: error handlers should generally be placed after all routes to catch errors globally.
6. Custom error classes like ExpressError help standardize error properties such as status codes and messages.
7. Multiple error handlers can exist, but typically a single centralized handler is preferred for consistency.
8. Using next(err) signals Express to skip remaining normal middleware and invoke error handlers.
9. Proper error handling improves app robustness and user experience by providing meaningful error responses.
*/

app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
