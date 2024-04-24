// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method to get make and model of the car
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor to inherit make and model
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype into the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method to get top speed of the sports car
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed + ' mph';
};

// Do not change the code below
//window.Car = Car;
//window.SportsCar = SportsCar;
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
