const Bee = require('./bee').Bee;
const fabricOfBees = require('./bee').fabricOfBees;
const printBees = require('./bee').printBees;
const getArrayOfBees = require('./bee').getArrayOfBees;
const randomNumber = require('./helpers').randomNumber;

const queenBee = new Bee('queen', 100);
const listOfWorkers = fabricOfBees(5,'worker', 75);
const listOfDrones = fabricOfBees(8, 'drone', 50);
const allTheBees = getArrayOfBees(queenBee, listOfWorkers, listOfDrones);
const btnAttack = document.getElementById('attack');
const attackingFlag = false;

// change this...
for (var i = 0; i < allTheBees.length; i++) {
  allTheBees[i].printBee();
}
