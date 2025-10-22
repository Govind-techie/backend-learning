# Backend Development Learning Journey

**Documenting my path into backend development, starting with Node.js fundamentals.**

## 📚 Current Learning Progress

### Node.js Core Concepts
- [x] JavaScript Runtime Environment 
- [x] Module Systems (CommonJS & ES)
- [x] NPM & Package Management
- [x] Command Line Arguments
- [x] File Operations

### 💡 Key Concepts Learned

#### Module Systems
```javascript
// CommonJS Style
const mathOperations = require('./math');
mathOperations.add(5, 3);

// ES Module Style
import { add, subtract } from './math.js';
add(5, 3);
```

#### Command Line Arguments
```javascript
// Reading user inputs
const args = process.argv.slice(2);
console.log('User provided:', args);
```

#### NPM Package Usage
```javascript
// Working with external packages
const figlet = require('figlet');
figlet.text('Hello Node.js!');
```

### 📝 Learning Notes

**Core Concepts**
- Node.js executes JavaScript outside browser
- Different module pattern implementations
- Package management with NPM
- Command line input processing
- Understanding module export patterns
- Managing file paths correctly
- Working with package dependencies

## 🎯 Next Learning Goals
1. Express.js Framework
2. Server Creation & Routes
3. Database Integration
4. RESTful API Design
5. Middlewares concept

---

*Started: October 2025 - Learning and documenting every step of the way*
