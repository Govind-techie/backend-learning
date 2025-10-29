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

### Object-Oriented Programming
- [x] OOP Basics (`01_OOPS.js`)
- [x] Object Prototypes (`02_objectPrototypes.js`)
- [x] Factory Functions (`03_factoryFunctions.js`)
- [x] Constructor Functions (`04_newOperator.js`)
- [x] ES6 Classes (`05_classes.js`)
- [x] Inheritance & Polymorphism (`06_inheritance.js`)

### RESTful API Development
- [x] REST Architecture Principles
- [x] CRUD Operations
- [x] RESTful Routes Pattern
- [x] Resource Naming Conventions
- [x] Client-Server Integration (`public/script.js`)
- [x] View Templates
  - Index View (`views/index.ejs`)
  - Show View (`views/show.ejs`)
  - Create View (`views/new.ejs`)
  - Edit View (`views/edit.ejs`)

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

### OOP Concepts

**Classes and Objects**
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    
    getInfo() {
        return `${this.username} (${this.email})`;
    }
}

const user = new User('john', 'john@example.com');
```

**Inheritance**
```javascript
class Admin extends User {
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }
}
```

### RESTful Routes Pattern

```javascript
// Basic REST routes setup
app.get('/resources', (req, res) => {
    // Index - Show all resources
});

app.post('/resources', (req, res) => {
    // Create - Add new resource
});

app.get('/resources/:id', (req, res) => {
    // Show - Display specific resource
});

app.put('/resources/:id', (req, res) => {
    // Update - Modify existing resource
});

app.delete('/resources/:id', (req, res) => {
    // Delete - Remove resource
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

**Object-Oriented Programming**
- Class-based vs Prototype-based OOP
- Constructor functions and 'new' operator
- Inheritance patterns in JavaScript
- Factory function patterns
- 'this' keyword behavior
- Prototypal inheritance chain

**RESTful API Design**
- Resource-based routing
- HTTP methods semantics (GET, POST, PUT, DELETE)
- Route naming conventions
- Client-server architecture
- Stateless communication
- CRUD operations mapping
- View templates organization

---

## 🎯 Next Learning Goals

1. Database Integration
2. Authentication & Authorization
3. API Security
4. Error Handling
5. Advanced Design Patterns

---

**Started:** October 2025  
**Last Updated:** October 2025

*Learning and documenting every step of the way* 🚀