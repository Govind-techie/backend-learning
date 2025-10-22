/*
  Module Exports - NodeJS

  In Node.js, `module.exports` is the object that a module returns when it is required in another file.
  It is used to expose functions, objects, or values from a module so that other files can import and use them.
  
  How it works:
  - You assign the value you want to export to `module.exports` in your module file.
  - When another file uses `require()` to import that module, it receives the `module.exports` object.
  
  Important Notes:
  - Always use `module.exports` (with an 's') to export your module. Using `module.export` (without the 's') is a common mistake and will not work.
  - You can export a single value, an object, a function, or any JavaScript data type.
  
  Example:
  In your module file:
    module.exports = { key: "value" };
  In the importing file:
    const imported = require('./moduleFile');
    console.log(imported.key); // outputs "value"
*/

// Import the exported value from the '01_script.js' file using require()
// The exported value is defined in the '01_script.js' file and can be checked there
let value = require("./01_script");

// Log the imported value to the console to verify successful import
console.log(value);

// Exporting a directory

/*
Import data from the "fruits" directory.
Node.js automatically looks for an 'index.js' file inside the directory when importing a directory.
The 'fruits/index.js' file exports an array of fruit objects.
Each fruit object contains properties such as 'name' and 'color'.
The 'info' variable here represents that array of fruit objects.
*/

const info = require("./Fruits");

console.log(info);

/*
Note: For better organization, all data or exports meant to be shared from the directory 
should be collected and exported through the 'index.js' file.
*/