/*
Object Prototypes in JavaScript

What are Prototypes?
- In JavaScript, every object has an internal link to another object called its prototype.
- The prototype acts as a blueprint — if a property or method is not found on an object, JavaScript looks for it on the object's prototype.
- This forms the basis of JavaScript’s inheritance model.

Why Use Prototypes?
- To achieve inheritance and reuse methods across multiple objects efficiently.
- Methods defined on the prototype are shared among all instances, saving memory.
- Helps create a chain of objects with shared functionality.

How Prototype Chain Works:
- When you access a property or method on an object:
  1. JavaScript first checks if it exists on the object itself.
  2. If not, it looks up the prototype chain (the `__proto__` link).
  3. This continues until it reaches `Object.prototype` (the top of the chain).
  4. If still not found, it returns `undefined`.

Notes:
- All functions in JavaScript have a property called `prototype`.
- Objects created using constructors inherit from the constructor’s prototype.
- You can inspect the prototype chain using:
    • obj.__proto__
    • Object.getPrototypeOf(obj)
- Avoid modifying built-in prototypes (like Array.prototype) in real projects.
*/

// Example 1: Constructor Function and Prototype Method

// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a shared method to the Person prototype
// This ensures all Person instances can use 'greet' without duplicating the function
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

// Creating two instances using the Person constructor
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Both instances share the same greet() method from the prototype
person1.greet(); // Hello, my name is Alice.
person2.greet(); // Hello, my name is Bob.

// Checking if the prototype of person1 is equal to Person.prototype
console.log(person1.__proto__ === Person.prototype); // true


// Example 2: Prototype Chain using Object.create()

// The 'animal' object acts as a prototype for other objects
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// 'rabbit' is created using 'animal' as its prototype
const rabbit = Object.create(animal);
rabbit.jumps = true; // adding its own property

// Accessing inherited properties and methods
console.log(rabbit.eats); // true (inherited from animal)
rabbit.walk(); // Animal walks (inherited method)
console.log(Object.getPrototypeOf(rabbit) === animal); // true


// Example 3: ES6 Class Prototype Example

// Defining a class 'Car' which under the hood uses prototypes
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  // Method added to Car.prototype automatically
  start() {
    console.log(`${this.brand} is starting...`);
  }
}

// Creating an instance of Car
const car1 = new Car("Tesla");
car1.start(); // Tesla is starting...

// Checking prototype linkage
console.log(Object.getPrototypeOf(car1) === Car.prototype); // true
