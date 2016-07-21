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
    list[i] = new Bee(name + ' ' + beeNameHelper, kind, healthPoints);
  }

  return list;
}

function printBees(el) {
  document.getElementsByClassName('bees-content')[0].innerHTML = '';

  for (var i = 0; i < el.length; i++) {
    var helperNumber = i;
    var lifeBar;
    var bee = document.createElement('div');
    bee.className += 'bee';
    bee.setAttribute('id', helperNumber);
    bee.innerHTML = '<div class="bee__wrap">' +
                    '  <div class="bee__head"></div>' +
                    '  <div class="bee__body"></div>' +
                    '  <div class="bee__wings"></div>' +
                    '  <div class="bee__stinger"></div>' +
                    '</div>' +
                    '<div class="lifebar">' +
                    '   <div class="lifebar__current"></div>' +
                    '</div>';
    document.getElementsByClassName('bees-content')[0].appendChild(bee);

    if (el[i].kind === 'worker') {
       bee.className += ' bee--worker';
       lifeBar = (el[i].healthPoints / 75) * 100;
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar + '%';
     } else if (el[i].kind === 'drone') {
       bee.className += ' bee--drone';
       lifeBar = (el[i].healthPoints / 50) * 100;
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar + '%';
     } else {
       bee.className += ' bee--queen';
       lifeBar = el[i].healthPoints + '%';
       bee.getElementsByClassName('lifebar__current')[0].style.width = lifeBar;
     }
  }
}

function getArrayOfBees() {
  var list = [];

  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Array)) {
      list.push(arguments[i]);
    } else {
      for (var j = 0; j < arguments[i].length; j++) {
        list.push(arguments[i][j]);
      }
    }
  }

  return list;
}

module.exports = {
  Bee: Bee,
  fabricOfBees: fabricOfBees,
  printBees: printBees,
  getArrayOfBees: getArrayOfBees
};