const figlet = require('figlet');
// When requiring packages installed via npm, we don’t need to use relative paths like "./" because Node.js automatically looks for them in the node_modules directory.

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});