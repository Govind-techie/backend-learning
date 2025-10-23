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

### Express.js
- [x] Basic Express Server
- [x] HTTP Methods (GET, POST)
- [x] Route Parameters
- [x] Query Strings
- [x] Static Files

### EJS Templates
- [x] Template Engine Setup
- [x] Dynamic Content Rendering
- [x] Loops & Conditionals
- [x] Partials & Includes
- [x] Passing Data to Views

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

### Express Server Setup

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(3000);
```

### EJS Template Usage

```javascript
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home', { name: 'World' });
});
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

**Express Framework**
- Web application framework
- Routing system
- Middleware concept
- Request/Response cycle

**EJS Template Engine**
- Dynamic HTML generation
- Template syntax (<%= %>)
- Includes & partials
- Data passing to views

---

## 🎯 Next Learning Goals

1. Database Integration
2. RESTful API Design
3. Authentication & Authorization
4. Error Handling

---

**Started:** October 2025  
**Last Updated:** October 2025

*Learning and documenting every step of the way* 🚀