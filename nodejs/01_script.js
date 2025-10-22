/*
Note:
To execute this file, run the command `node script.js` in your terminal.
This command runs the file using the Node.js runtime environment.
*/

let n = 5;

for (let i = 0; i < n; i++) {
    console.log("Hello");
}

// Define a constant variable 'val' with the value 123 to be exported
const val = 123;

// Export the value of 'val' so it can be imported and used in other files
// This file exporting 'val' can be required in another file (like '03_moduleExport.js') to access this value
// Note: Values can also be exported in the form of an object.
module.exports = val;
