/* 
JavaScript Class Inheritance — Overview & Working

What is Inheritance?
- Inheritance allows one class (child/subclass) to use the properties and methods of another class (parent/superclass).
- It helps in reusability and clean, hierarchical code structure.

How it works:
- The 'extends' keyword is used to create a subclass that inherits from another class.
- The 'super()' function is used inside the child class constructor to call the parent class constructor.

Key Points:
1. The 'extends' keyword links the prototype chain between child and parent classes.
2. 'super()' must be called before accessing 'this' in a subclass constructor.
3. A subclass can override parent methods by defining them again.
4. We can still call parent methods using 'super.methodName()'.
5. Inheritance supports multi-level hierarchies (a class can extend another subclass).

Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }

  eat() {
    super.eat(); // optional: call parent method
    console.log(`${this.name} enjoys bones`);
  }
}

const d = new Dog("Tommy", "Labrador");
d.eat();  // Output: Tommy is eating
           //         Tommy enjoys bones
d.bark(); // Output: Tommy is barking
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); // parent class constructor being called. 
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age); // parent class constructor being called. 
        this.subject = subject;
    }
}

let s1 = new Student("ABC", 14, 89);
let t1 = new Teacher("PQR", 32, "English");

console.log(s1.name);
console.log(t1.age);

s1.talk();
t1.talk();