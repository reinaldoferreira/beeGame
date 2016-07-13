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
  return random
}

function printBees(el) {
  document.getElementsByClassName('bees-content')[0].innerHTML = ''

  for (var i = 0; i < el.length; i++) {
    var helperNumber = i
    var bee = document.createElement('div')
    bee.className += 'bee'
    bee.setAttribute('id', helperNumber)
    bee.innerHTML = '<div class="bee__wrap">' +
                    '  <div class="bee__head"></div>' +
                    '  <div class="bee__body"></div>' +
                    '  <div class="bee__wings"></div>' +
                    '  <div class="bee__stinger"></div>' +
                    '</div>' +
                    '<div class="lifebar">' +
                    '   <div class="lifebar__current"></div>' +
                    '</div>'
    document.getElementsByClassName('bees-content')[0].appendChild(bee)

    if (el[i].kind === 'worker') {
       bee.className += ' worker'
       var lifeBar = (el[i].healthPoints / 75) * 100
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar + '%'
     } else if (el[i].kind === 'drone') {
       bee.className += ' drone'
       var lifeBar = (el[i].healthPoints / 50) * 100
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar + '%'
     } else {
       bee.className += ' queen'
       var lifeBar = el[i].healthPoints + '%'
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar
     }
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

  function attackProcess(damage) {
    var bee = document.getElementById(beePosition)
    bee.className += ' bee--attacked'

    setTimeout(function() {
      if (allTheBees[beePosition].healthPoints >= 0) {
        allTheBees[beePosition].decreaseHP(damage)

        if (allTheBees[beePosition].healthPoints <= 0) {
          if (allTheBees[beePosition].kind === 'queen') {
            alert('The Queen Bee died! Play again?');
          }
          allTheBees.splice(beePosition, 1)
        }
        printBees(allTheBees)
        btnAttack.className = ''
      }
    }, 200);
  }

  switch (allTheBees[beePosition].kind) {
    case 'drone':
      attackProcess(12)
      break;

    case 'worker':
      attackProcess(10)
      break;

    default:
      attackProcess(8)
  }
}

var queenBee = new Bee('Queen Bee', 'queen', 100)
var listOfWorkers = fabricOfBees(8, 'Worker Bee', 'worker', 75)
var listOfDrones = fabricOfBees(12, 'Drone Bee', 'drone', 50)
var btnAttack = document.getElementById('attack')
var btnStart = document.getElementById('start')
var allTheBees = getArrayOfBees(queenBee, listOfWorkers, listOfDrones)

btnStart.onclick = function() {
  printBees(allTheBees)

  document.body.removeChild(btnStart)
}

btnAttack.onclick = function(event) {
  if (!this.classList.contains('attacking')) {
    attackRandomBee()
    this.className += 'attacking'
  }
}
