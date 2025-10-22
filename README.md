# Backend Development Learning Journey 📚

**Personal documentation of my backend development learning path, tracking progress and discoveries as I build my skills in Node.js and related technologies.**

## 🎯 What I'm Currently Learning

### Node.js Fundamentals
- [x] Running JavaScript in Node.js environment (`01_script.js`)
- [x] Processing command line arguments (`02_processArgv.js`)
- [x] CommonJS module system (`03_moduleExport.js`)
- [x] NPM package management (`04_npm.js`)
- [x] ES Modules syntax (`05_import.js`)
- [x] Creating utility modules (`math.js`)

### 📝 Key Learnings So Far

#### 1. Basic Node.js Execution
```javascript
// From 01_script.js
console.log("Starting with Node.js");
console.log(__dirname, __filename);
```

#### 2. Command Line Arguments
```javascript
// From 02_processArgv.js
const args = process.argv.slice(2);
// Learning to process command line inputs
```

#### 3. Module Systems
```javascript
// CommonJS (03_moduleExport.js)
const math = require('./math');

// ES Modules (05_import.js)
import { add, subtract } from './math.js';
```

## 🛠️ Practice Projects

### 1. Math Utility Module
**Status**: Completed ✅
- Location: `math.js`
- Implements basic arithmetic operations
- Exports reusable math functions
- Mathematical constants (PI, g)

### 2. Fruit Module System
**Status**: Completed ✅
- Location: `/Fruits`
- Demonstrates directory-based modules
- Individual fruit modules (apple.js, banana.js, orange.js)
- Module aggregation (index.js)

### 3. Figlet Implementation
**Status**: Completed ✅
- Location: `/FigletDir`
- Working with external NPM packages
- Package.json configuration
- ASCII art generation

## 🎯 Coming Up Next

1. **Express.js Basics**
   - Server creation
   - Routing fundamentals
   - Middleware concepts

2. **Database Integration**
   - SQL basics
   - MongoDB introduction
   - Data modeling

## 💭 Personal Notes

Things I found interesting:
- Node.js module patterns and exports
- Directory-based module organization
- NPM package management system

Things I found challenging & fun:
- Understanding different module syntaxes
- Working with command line arguments
- Managing package dependencies

---

*This is my learning journey - documenting as I go, making mistakes, and growing as a developer. Started October 2025.*
