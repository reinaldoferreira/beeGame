function Bee(name, healthPoints) {
  this.name = name;
  this.healthPoints = healthPoints;
}

Bee.prototype.decreaseHP = function (pointsToDecrease) {
  return this.healthPoints -= pointsToDecrease;
}

function fabricOfBees(numberOfBees, name, healthPoints) {
  var list = [];

  for (var i = 0; i < numberOfBees; i++) {
    var beeNameHelper = i + 1
    list[i] = new Bee(name + " " + beeNameHelper, healthPoints)
  }

  return list
}

function randomNumber(number) {
  var random = Math.floor((Math.random() * number) + 1)
  return random
}

function whichBeeToHit(list) {
  var position = randomNumber(list.length) - 1
  return position
}

function attackRandomBee() {

  switch (randomNumber(3)) {
    case 1:
      console.log('- - - Queen - - -')
      if (randomNumber(3) === 1) {
        if (queenBee.healthPoints > 0) {
          queenBee.decreaseHP(8)
          console.log('The Queen Bee has been attacked!! Now it has ' + queenBee.healthPoints)
          if (queenBee.healthPoints < 0) console.log('The Queen Bee died, Play again?')
        } else {
          console.log('The Queen Bee died, Play again?')
        }
      } else {
        console.log('The Queen Bee dodged your attack!');
      }
      break;

    case 2:
      console.log('- - - Worker - - -')
      var position = whichBeeToHit(listOfWorkers)

      if (listOfWorkers[position].healthPoints >= 0) {
        listOfWorkers[position].decreaseHP(10)
        console.log('The ' + listOfWorkers[position].name + ' has been attacked!! Now it has ' + listOfWorkers[position].healthPoints +' of HP');

        if (listOfWorkers[position].healthPoints <= 0) {
          listOfWorkers.splice(position, 1)
          console.log('... so it is dead!')
        }
      } else {
        listOfWorkers.splice(position, 1)
      }
      break;

    default:
      console.log('- - - Drone - - -')
      var position = whichBeeToHit(listOfDrones)
      if (listOfDrones[position].healthPoints >= 0) {
        listOfDrones[position].decreaseHP(12)
        console.log('The ' + listOfDrones[position].name + ' has been attacked!! Now it has ' + listOfDrones[position].healthPoints +' of HP');

        if (listOfDrones[position].healthPoints <= 0) {
          listOfDrones.splice(position, 1)
          console.log('... so it is dead!')
        }
      } else {
        listOfDrones.splice(position, 1)
      }
  }
}

var queenBee = new Bee('Queen Bee', 100)
var listOfWorkers = fabricOfBees(8, "Worker Bee", 75)
var listOfDrones = fabricOfBees(12, "Drone Bee", 50)
var btnAttack = document.getElementById("attack");

btnAttack.onclick = function() {
  console.log('atacou');
  attackRandomBee();
}
