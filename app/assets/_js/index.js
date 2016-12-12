const Bee = require('./bee').Bee;
const fabricOfBees = require('./bee').fabricOfBees;
const printBees = require('./bee').printBees;
const getArrayOfBees = require('./bee').getArrayOfBees;
const randomNumber = require('./helpers').randomNumber;

var queenBee = new Bee('queen', 100);
var listOfWorkers = fabricOfBees(5,'worker', 75);
var listOfDrones = fabricOfBees(8, 'drone', 50);
var allTheBees = getArrayOfBees(queenBee, listOfWorkers, listOfDrones);
const btnAttack = document.getElementById('attack');
var attackingFlag = false;

// change this... \/
function printBee() {
  for (var i = 0; i < allTheBees.length; i++) {
    allTheBees[i].printBee();
  }
}
printBee();

const attackProcess = (beePosition, damage) => {
  // bee.className += ' is-bee--attacked';

  setTimeout(() => {
    if (allTheBees[beePosition].healthPoints >= 0) {
      allTheBees[beePosition].decreaseHP(damage);

      if (allTheBees[beePosition].healthPoints <= 0) {
        if (allTheBees[beePosition].type === 'queen') {
          alert('The Queen Bee died! You lose and the will be restarted');
          queenBee = new Bee('queen', 100);
          listOfWorkers = fabricOfBees(5, 'worker', 75);
          listOfDrones = fabricOfBees(8, 'drone', 50);
          allTheBees = getArrayOfBees(queenBee, listOfWorkers, listOfDrones);
        } else {
          allTheBees.splice(beePosition, 1);
        }
      }
      attackingFlag = false;
      document.getElementById('gameBoard').innerHTML = '';
      printBee()
    }
  }, 200);
}

const attackRandomBee = () => {
  let beePosition = randomNumber(allTheBees.length);

  switch (allTheBees[beePosition].type) {
    case 'drone':
      attackProcess(beePosition, 12);
      break;

    case 'worker':
      attackProcess(beePosition, 10);
      break;

    default:
      attackProcess(beePosition, 8);
  }
}

btnAttack.onclick = function() {
  if (!attackingFlag) {
    attackRandomBee();
    attackingFlag = true;
  }
};

document.body.onkeyup = function(key) {
  if(key.keyCode === 32 || key.keyCode === 13) {
    if (!attackingFlag) {
      attackRandomBee();
      attackingFlag = true;
    }
  }
};
