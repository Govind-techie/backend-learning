/* 

JavaScript Classes :- Working & Overview


What are Classes?
- Classes in JavaScript are blueprints for creating objects.
- They provide a cleaner and more structured way to write object-oriented code.
- Under the hood, classes are syntactic sugar over JavaScript’s prototype-based inheritance.

Defining a Class:
- Use the 'class' keyword followed by the class name.
- The class can contain:
  - A constructor() method — runs automatically when a new object is created.
  - Other methods — define object behavior.

Creating an Object:
- Use the 'new' keyword: `const obj = new ClassName();`
- The 'new' keyword:
  1. Creates an empty object.
  2. Sets the prototype.
  3. Calls the constructor method.

The 'this' Keyword:
- Inside class methods, 'this' refers to the object created using 'new'.
- If the class is called without 'new', 'this' will be undefined (in strict mode).

Inheritance:
- Use 'extends' keyword to create subclasses.
- Use 'super()' to call the parent class’s constructor or methods.

Important Notes:
- Classes are NOT hoisted — you must define them before using.
- You can add getters, setters, and static methods as well.
- Methods defined in classes are added to the prototype, not directly on objects.

Example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person('ABC', 18);
p1.greet(); // Output: Hello, my name is ABC
*/

// Example demonstrating how JavaScript classes work

// Defining a class 'Person' which acts as a blueprint for creating person objects
class Person {
    // The constructor() method is called automatically when a new object is created using 'new'
    constructor(name, age) {
        // 'this' refers to the current object being created
        // These become properties of each new object
        this.name = name;
        this.age = age;
    }

    // Defining a method 'talk' that can be used by all objects created from this class
    talk() {
        // Accessing the 'name' property of the current object using 'this'
        console.log(`Hi, my name is ${this.name}`);
    }
}

// Creating two different objects (instances) from the Person class
let p1 = new Person("Bob", 23);
let p2 = new Person("Alice", 20);

// Accessing the object properties directly
console.log(p1.name); // Output: Bob
console.log(p2.age);  // Output: 20

// Calling the 'talk' method for each object
// Each object uses its own 'name' property inside the method
p1.talk(); // Output: Hi, my name is Bob
p2.talk(); // Output: Hi, my name is Alice