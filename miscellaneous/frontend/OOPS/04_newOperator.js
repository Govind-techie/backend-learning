/*
The 'new' Operator - JavaScript

What is the 'new' Operator?
- The 'new' operator is used to create an instance of an object that has a constructor function.
- It automates object creation and sets up inheritance via the function’s prototype.

How it Works Internally:
When you call a function with 'new', JavaScript does the following steps:
1. Creates a new empty object.
2. Sets the prototype of the new object to the constructor's prototype.
3. Binds 'this' inside the constructor to the new object.
4. Executes the constructor function body.
5. Returns the newly created object (unless the constructor explicitly returns another object).

Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // Alice
console.log(person1 instanceof Person); // true

Equivalent Without 'new':
function PersonManual(name, age) {
  const obj = {};
  Object.setPrototypeOf(obj, PersonManual.prototype);
  obj.name = name;
  obj.age = age;
  return obj;
}

const person2 = PersonManual("Bob", 30);
console.log(person2.name); // Bob

Notes:
- Always capitalize constructor function names (e.g., Person, Car).
- If a constructor returns a non-object value, it’s ignored, and the new object is returned.
- Using 'new' helps establish prototype-based inheritance automatically.
- Modern JavaScript classes internally use the same mechanism as 'new'.
*/


// Constructor Function Example
function Person(name, age) {
    // When called with 'new', JavaScript automatically:
    // 1. Creates a new empty object: {}
    // 2. Sets the prototype of that object to Person.prototype
    // 3. Binds 'this' to that new object
    // 4. Executes the function body
    // 5. Returns the new object automatically

    // 'this' refers to the new object created by 'new'
    this.name = name;
    this.age = age;
}

// Note: Constructor functions are typically named with an uppercase letter and don’t return a value explicitly — 
// the 'new' operator handles object creation automatically.

// Adding a method to the constructor’s prototype (shared across all instances)
Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
};

// Creating two instances using 'new'
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 21);

// Each 'new Person()' call creates a separate object with its own properties
// 'this' inside Person() refers to p1 or p2 respectively


/*
If you call Person() without 'new':
- 'this' will not refer to a new object
- In strict mode, it becomes 'undefined' and throws an error
- In non-strict mode, it points to the global object (which can cause bugs)
*/

/*
Important Notes:
- 'new' is what creates and binds 'this' to the new object.
- Without 'new', 'this' will not refer to the instance — leading to incorrect or global assignments.
- The returned object from 'new' automatically includes access to Person.prototype methods.
- Modern 'class' syntax in JavaScript internally works exactly like this constructor + prototype pattern.
*/