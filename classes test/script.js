class Car {
  constructor(model, engine, cost) {
    this.model = model;
    this.engine = engine;
    this.cost = cost;
  }

  get info() {
    console.log(`model: ${this.model}`)
    console.log(`engine: ${this.engine}`)
    console.log(`cost: ${this.cost}`)
  }
}

const mercedes = new Car('C63', 'V6', '23000$')
const audi = new Car('R8', 'V8', '14000$')

mercedes.info
audi.info