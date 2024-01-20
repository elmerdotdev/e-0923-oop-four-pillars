class Person {
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

  get age() {
    return this._age
  }

  set age(newAge) {
    this._age = newAge
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

const person1 = new Person('Alice', 25)
person1.greet()