class Animal {
  constructor(name) {
    this._name = name
  }

  eat() {
    console.log(`${this._name} is eating`)
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this._name} is barking`)
  }
}

const pet = new Dog('Timmy')
pet.eat()
pet.bark()