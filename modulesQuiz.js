/*
1. Import the default export from utilities.js in the same folder as this module file. Save it to a variable called utilities.

import utilities from './utilities';

2. Which of the following is valid syntax to import a module from the same directory with require()?

let Robot = {};
Robot.name = "Johnny";
Robot.sayName = function(name){
  console.log("My name is " + name); 
};
answer:
const Robot = require('./robot.js);

3. Named exports allow multiple objects to be exported, based on which of the following?

a. the location within a file
b. the var names
c. the filename
d. the required objects
answer: b

4. Which of the following is valid syntax to export the Planets module using the default export syntax?

let Planets = {};
Planets.shape = "sphere";
Planets.calculateVolume = function(radius) {
  let volume = 4/3 * π * Math.pow(radius, 3)
  return volume;
}

export default Planets;

5. How would one export the following variables using named exports?

let elephant = { ... };
let sheep = { ... };
let animalCount = 2;
let revenue = 320;

export { elephant, sheep, animalCount, revenue };

6. Which best represents a way to export aliased variables?

let publicSchools = { ... };
let studentNames = [];
let studentAges = [];

export { publicSchools as schools, studentNames as names, studentAges as ages };

7. Which best represents a way to import both named and default exports?

a. import { celebration } from './celebration';
b. import { cake, gifts, dinner, dj } from './celebration';
import venue from './celebration';
c. import { all } from './celebration';
d. import { cake, gifts, dinner, dj } from './celebration';
answer: b

8. Which bests represents exporting variables inline?

let electricFleet = { ... };
let cars = 18;
let trucks = 12;

a. default export let eletricFleet = {...};
default export let cars = 18;
default export let trucks = 12 ;

b. export { eletricFleet, cars, trucks };

c. export eletricFleet, cars, trucks;

d. export let eletricFleet = {...};
export let cars = 18;
export let trucks = 12 ;

answer: d

9. Which of the following is NOT true of JavaScript modules?

a. Creating modules makes it easier to keep sensitive information private from other modules

b. Creating modules and only importing the necessary modules for each file prevents namespace pollution. 

c. Creating modules makes it easier to reuse logic in multiple parts of an application

d. Creating modules makes it harder to find relevant code and makes debugging harder

answer: d

10. Which of the following is a valid syntax to export this module?

let Robot = {};
Robot.name = "Johnny";
Robot.sayName = function(name){
  console.log("My name is " + name); 
};

a. module.export = {};

b. Robot = module.exports;

c. module.exports = Robot;

d. module.exports.Robot;

answer: c
*/
