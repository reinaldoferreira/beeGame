function Bee(name, kind, healthPoints) {
  this.name = name;
  this.kind = kind;
  this.healthPoints = healthPoints;
}

Bee.prototype.decreaseHP = function (pointsToDecrease) {
  return this.healthPoints -= pointsToDecrease;
};


function fabricOfBees(numberOfBees, name, kind, healthPoints) {
  var list = [];

  for (var i = 0; i < numberOfBees; i++) {
    var beeNameHelper = i + 1;
    list[i] = new Bee(name + " " + beeNameHelper, kind, healthPoints)
  }

  return list;
}

function randomNumber(number) {
  var random = Math.floor((Math.random() * number) + 1)
  return random
}

function whichBeeToHit(list) {
  var position = randomNumber(list.length)
  return position
}

var queenBee = new Bee('Queen Bee', 'queen', 100);
function attackRandomBee() {

  switch (randomNumber(3)) {
    case 1:
      console.log('Queen')
      if (queenBee.healthPoints > 0) {
        queenBee.decreaseHP(8)
        console.log(queenBee.healthPoints);
        if (queenBee.healthPoints < 0) console.log('The Queen Bee died, Play again?');
      } else {
        console.log('The Queen Bee died, Play again?');
      }
      break;
    case 2:
      console.log('Worker')
      break;
    default:
      console.log('Drone')
  }
}
