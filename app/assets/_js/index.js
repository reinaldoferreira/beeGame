var Bee = require('./bee').Bee;
var fabricOfBees = require('./bee').fabricOfBees;
var printBees = require('./bee').printBees;
var getArrayOfBees = require('./bee').getArrayOfBees;

function randomNumber(number) {
  var random = Math.floor((Math.random() * number));
  return random;
}

function attackRandomBee() {
  var beePosition = randomNumber(allTheBees.length);

  function attackProcess(damage) {
    var bee = document.getElementById(beePosition);
    bee.className += ' is-bee--attacked';

    setTimeout(function() {
      if (allTheBees[beePosition].healthPoints >= 0) {
        allTheBees[beePosition].decreaseHP(damage);

        if (allTheBees[beePosition].healthPoints <= 0) {
          if (allTheBees[beePosition].kind === 'queen') {
            alert('The Queen Bee died! Play again?');
          }
          allTheBees.splice(beePosition, 1);
        }
        printBees(allTheBees);
        attackingFlag = false;
      }
    }, 200);
  }

  switch (allTheBees[beePosition].kind) {
    case 'drone':
      attackProcess(12);
      break;

    case 'worker':
      attackProcess(10);
      break;

    default:
      attackProcess(8);
  }
}

var queenBee = new Bee('Queen Bee', 'queen', 100);
var listOfWorkers = fabricOfBees(5, 'Worker Bee', 'worker', 75);
var listOfDrones = fabricOfBees(8, 'Drone Bee', 'drone', 50);
var allTheBees = getArrayOfBees(queenBee, listOfWorkers, listOfDrones);
var btnAttack = document.getElementById('attack');
var attackingFlag = false;

printBees(allTheBees);

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
