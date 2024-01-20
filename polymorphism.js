class Animal {
  makeSound() {
    console.log('Some animal sound...')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Barking...')
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meowing...')
  }
}

const myDog = new Dog()
const myCat = new Cat()
myDog.makeSound()
myCat.makeSound()