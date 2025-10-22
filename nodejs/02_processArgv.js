/*
Process Argv - NodeJS:

- `process.argv` is an array containing the command-line arguments passed when launching a Node.js process.
- The first element (`process.argv[0]`) is the path to the Node.js executable.
- The second element (`process.argv[1]`) is the path to the JavaScript file being executed.
- Subsequent elements (`process.argv[2]` onwards) are any additional command-line arguments provided by the user.

How to pass arguments from the terminal:

- When running your script, you can add arguments after the script name.
- Example:
    node script.js arg1 arg2

Example output:

[
  '/path/to/node',                 // Node.js executable path
  '/path/to/script.js',            // Path to the script file
  'arg1',                         // First user argument
  'arg2'                          // Second user argument
]

This allows you to access command-line inputs inside your Node.js program via `process.argv`.
*/

// Example usage of process.argv in a Node.js script

// Log the entire process.argv array to see all arguments passed
console.log('All arguments:', process.argv);

// Extract user arguments (excluding the first two elements which are node path and script path)
const userArgs = process.argv.slice(2);

// Log the user arguments only
console.log('User arguments:', userArgs);

// Simple greeting program that uses the first user argument as a userName
const userName = userArgs[0];

// Check if a userName was provided
if (userName) {
  console.log(`Hello, ${userName}! Welcome to the Node.js program.`);
} else {
  console.log('Hello! Please provide your name as an argument.');
}
