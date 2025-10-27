/* 
Object-Oriented Programming (OOP) - JavaScript

What is OOP?
OOP (Object-Oriented Programming) is a programming paradigm that organizes code into reusable objects that contain both data (properties) and behavior (methods). 
JavaScript supports OOP through prototypes and ES6 classes.

Why use OOP?
- Makes code more modular, readable, and maintainable.
- Helps model real-world entities using objects.
- Encourages code reuse via inheritance and composition.

4 Main Principles of OOP:

1. Encapsulation
   - Binding data (properties) and behavior (methods) into one unit (object).
   - Helps hide implementation details using private variables or closures.

2. Abstraction
   - Hiding complex logic and exposing only the necessary details.
   - Example: using functions or classes to simplify internal logic.

3. Inheritance
   - Allows objects to inherit properties and methods from other objects or classes.
   - In JS: Achieved using prototypes or `extends` keyword in classes.

4. Polymorphism
   - Ability of different objects to respond differently to the same method.
   - In JS: Achieved via method overriding or dynamic typing.

How OOP Works in JavaScript
- JavaScript uses prototypes as its inheritance mechanism.
- With ES6, we can create classes that act as syntactic sugar over prototypes.
- Objects can be created using:
    • Object literals
    • Constructor functions
    • Classes (ES6+)
    • Object.create() method

Example Structure
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, a student in grade ${this.grade}.`);
  }
}

Notes:
- JS OOP is flexible — you can mix functional and OOP styles.
- Use super() to call parent constructors in derived classes.
- Methods are added to prototypes to save memory.
- Private fields (using #) help achieve true encapsulation in modern JS.
*/