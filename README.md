# Backend Development Learning Journey

**Documenting my path into backend development, starting with Node.js fundamentals.**

---

## 📖 Table of Contents

- [Current Learning Progress](#current-learning-progress)
- [Key Concepts Learned](#key-concepts-learned)
- [Learning Notes](#learning-notes)
- [Next Learning Goals](#next-learning-goals)

---

## 🚀 Current Learning Progress

### Node.js Core Concepts
- [x] JavaScript Runtime Environment (`01_script.js`)
- [x] Module Systems (CommonJS & ES) (`03_moduleExport.js`, `05_import.js`)
- [x] NPM & Package Management (`04_npm.js`)
- [x] Command Line Arguments (`02_processArgv.js`)
- [x] Basic Math Operations (`math.js`)

---

## 💡 Key Concepts Learned

### Module Systems

**CommonJS Style**
```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// Using in another file
const mathOperations = require('./math');
mathOperations.add(5, 3);
```

**ES Module Style**
```javascript
// Using ES import/export
import { PI, g } from './math.js';
console.log(PI, g);
```

### Command Line Arguments

```javascript
// Reading user inputs from terminal
const args = process.argv.slice(2);
console.log('User provided:', args);
```

### NPM Package Usage

```javascript
// Using figlet package
const figlet = require('figlet');
console.log(figlet.textSync("Hello World!"));
```

---

## 📝 Learning Notes

### Core Understanding

**What is Node.js?**
- Node.js executes JavaScript outside browser
- Uses V8 JavaScript engine
- Enables server-side JavaScript

**Module Patterns**
- CommonJS module system
- ES module implementation
- Directory-based modules (Fruits example)

**Package Management**
- NPM basics
- Installing and using packages (Figlet example)
- Package.json structure

---

## 🎯 Next Learning Goals

1. Express.js Framework
2. Server Creation & Routes
3. Database Integration
4. RESTful API Design

---

**Started:** October 2025  
**Last Updated:** October 2025

*Learning and documenting every step of the way* 🚀