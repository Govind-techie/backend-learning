/*
Factory Functions in JavaScript

What are Factory Functions?
- A factory function is a function that returns a new object every time it’s called.
- Unlike constructors or classes, they don’t use 'new' or 'this'.
- Useful for creating multiple similar objects easily.

Why Use Factory Functions?
- Avoids the use of 'this' and 'new', making code simpler.
- Supports encapsulation using closures (private variables).
- Encourages composability by combining multiple smaller functions.

Example:
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

person1.greet();
person2.greet();

Notes:
- Great alternative to classes when inheritance isn’t required.
- Factory functions return plain objects — no prototype chain needed.
- Can use Object.assign() or spread syntax (...) to combine behaviors.
*/

function person(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi there, my name is ${this.name}`);
        }
    }

    return person
}

let p1 = person("Bob", 25);
p1.talk();