function Bee(name, kind, healthPoints) {
  this.name = name
  this.kind = kind
  this.healthPoints = healthPoints
}

Bee.prototype.decreaseHP = function (pointsToDecrease) {
  return this.healthPoints -= pointsToDecrease
}

function fabricOfBees(numberOfBees, name, kind, healthPoints) {
  var list = []

  for (var i = 0; i < numberOfBees; i++) {
    var beeNameHelper = i + 1
    list[i] = new Bee(name + ' ' + beeNameHelper, kind, healthPoints)
  }

  return list
}

function randomNumber(number) {
  var random = Math.floor((Math.random() * number))
  console.log('random number is ' + random)
  return random
}

function printBees(el) {
  for (var i = 0; i < el.length; i++) {
    var helperNumber = i + 1
    var bee = document.createElement('div')
    bee.className += 'bee'
    bee.setAttribute('id', helperNumber)
    bee.innerHTML = '<span class="bee__head"></span><span class="bee__body"></span><span class="bee__wings"></span><span class="bee__stinger"></span>'
    document.getElementsByClassName('bees-content')[0].appendChild(bee)
  }
}

function getArrayOfBees() {
  var list = []

  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Array)) {
      list.push(arguments[i])
    } else {
      for (var j = 0; j < arguments[i].length; j++) {
        list.push(arguments[i][j])
      }
    }
  }

  return list
}

function attackRandomBee() {
  var beePosition = randomNumber(allTheBees.length)

  if (allTheBees[beePosition].kind === 'queen') {
    console.log('- - - Queen - - -')
    var bee = document.getElementById(beePosition)
    console.log(bee)
    console.log('inside queen ' + beePosition)

    if (allTheBees[beePosition].healthPoints > 0) {
      allTheBees[beePosition].decreaseHP(8)
      console.log('The Queen Bee has been attacked!! Now it has ' + allTheBees[beePosition].healthPoints)
      if (allTheBees[beePosition].healthPoints < 0) console.log('The Queen Bee died, Play again?')
    } else {
      console.log('The Queen Bee died, Play again?')
    }

  } else if (allTheBees[beePosition].kind === 'worker') {
    console.log('- - - Worker - - -')
    var bee = document.getElementById(beePosition)
    console.log(bee)

    if (allTheBees[beePosition].healthPoints >= 0) {
      allTheBees[beePosition].decreaseHP(10)
      console.log('The ' + allTheBees[beePosition].name + ' has been attacked!! Now it has ' + allTheBees[beePosition].healthPoints +' of HP')

      if (allTheBees[beePosition].healthPoints <= 0) {
        allTheBees.splice(beePosition, 1)
        console.log('... so it is dead!')
        document.getElementsByClassName('bees-content')[0].removeChild(bee)
      }
    } else {
      allTheBees.splice(beePosition, 1)
      document.getElementsByClassName('bees-content')[0].removeChild(bee)
    }

  } else {
    console.log('- - - Drone - - -')
    var bee = document.getElementById(beePosition)
    console.log(bee)

    if (allTheBees[beePosition].healthPoints >= 0) {
      allTheBees[beePosition].decreaseHP(12)
      console.log('The ' + allTheBees[beePosition].name + ' has been attacked!! Now it has ' + allTheBees[beePosition].healthPoints +' of HP')

      if (allTheBees[beePosition].healthPoints <= 0) {
        allTheBees.splice(beePosition, 1)
        console.log('... so it is dead!')
        document.getElementsByClassName('bees-content')[0].removeChild(bee)
      }
    } else {
      allTheBees.splice(beePosition, 1)
      document.getElementsByClassName('bees-content')[0].removeChild(bee)
    }
  }
}

var queenBee = new Bee('Queen Bee', 'queen', 100)
var listOfWorkers = fabricOfBees(8, 'Worker Bee', 'worker', 75)
var listOfDrones = fabricOfBees(12, 'Drone Bee', 'drone', 50)
var btnAttack = document.getElementById('attack')
var btnStart = document.getElementById('start')
var allTheBees = getArrayOfBees(queenBee, listOfDrones, listOfWorkers)

btnStart.onclick = function() {
  console.log('The has started')
  printBees(allTheBees)

  document.body.removeChild(btnStart)
}

btnAttack.onclick = function() {
  console.log('Attack')
  attackRandomBee()
}
