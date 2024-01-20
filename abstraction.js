class Vehicle {
  startEngine() {
    // Complex code on how to start an engine
  }

  stopEngine() {
    // Complex code on how to stop an engine
  }

  drive() {
    this.startEngine()
    // More complex code
    this.stopEngine()
  }
}

const myCar = new Vehicle()
myCar.drive() // Start the car. The user does not need to know how an engine starts or stops
