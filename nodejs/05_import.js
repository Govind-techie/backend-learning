/*
Imports in NodeJs

Node.js supports two module systems:
- CommonJS (require)
- ES Modules (import)

CommonJS:
- Uses require() to import modules.
- Default module system in Node.js.
- Example: const fs = require('fs');

ES Modules:
- Uses import statement.
- Requires enabling in Node.js by setting "type": "module" in package.json or using .mjs extension.
- Example: import fs from 'fs';

Difference between require and import:
- require() is synchronous and can be called conditionally or dynamically at runtime.
- import statements are asynchronous and must be at the top level of the file; they cannot be used conditionally or dynamically.

To enable ES Modules:
1. Add "type": "module" in package.json
2. Or rename files with .mjs extension

Example:
import fs from 'fs';
*/

import {sum, PI} from "./math.js"

/*
The import statement lets you selectively import only specific functions, constants, or objects from a module or file,
instead of loading the entire module like require() does. This means you can choose exactly what you need,
which can help make your code more efficient. Also, import supports tree-shaking—unused code can be excluded during bundling,
while require() always loads the whole module. To import, just list what you want inside curly braces, like above.
*/
console.log(sum(1,2));
console.log(PI);

/*
Note: To use the ES Module `import` statement in Node.js, your file must be recognized as a module. 
To do this, first run `npm init` in your project directory to create a `package.json` file if you don't have one already. 
Then, open `package.json` and add the property `"type": "module"`. 
This tells Node.js to treat your JavaScript files as ES Modules, allowing you to use `import` and `export` syntax.
Without this setting (or using the `.mjs` file extension), Node.js will not allow ES Module imports.
*/