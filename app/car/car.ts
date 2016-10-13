export class Car {

  public engine: Engine;
  public tires: Tires;
//   public description = 'No DI';

//   constructor() {
//     this.engine = new Engine();
//     this.tires = new Tires();
//   }

public description = 'DI';

constructor(public engine: Engine, public tires: Tires) { }
  
  // Method using the engine and tires
  drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}
