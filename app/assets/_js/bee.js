"use strict";

class Bee {
  constructor(type, healthPoints) {
    this.type = type;
    this.healthPoints = healthPoints;
  }

  decreaseHP(n) { return this.healthPoints -= n }

  printBee() {
    let bee = document.createElement('div');
    let beeLife = (this.healthPoints / this.healthPoints) * 100
    let beeStructure = '<div class="bee__wrap"><div class="bee__head"></div><div class="bee__body"></div><div class="bee__wings"></div><div class="bee__stinger"></div></div><div class="lifebar"><div class="lifebar__life" style="width:'+ beeLife +'%"></div></div>';
    bee.className += 'bee bee--' + this.type;
    bee.innerHTML = beeStructure;
    document.getElementById('gameBoard').appendChild(bee);
  }
}

const fabricOfBees = (numberOfBees, kind, healthPoints) => {
  let list = [];

  for (let i = 0; i < numberOfBees; i++) {
    list[i] = new Bee(kind, healthPoints);
  }

  return list;
}

const getArrayOfBees = function() {
  let list = [];

  for (let i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Array)) {
      list.push(arguments[i]);
    } else {
      for (let j = 0; j < arguments[i].length; j++) {
        list.push(arguments[i][j]);
      }
    }
  }

  return list;
}

module.exports = {
  Bee: Bee,
  fabricOfBees: fabricOfBees,
  getArrayOfBees: getArrayOfBees
};
