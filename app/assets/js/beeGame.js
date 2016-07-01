function Bee(name, kind, healthPoints) {
  this.name = name;
  this.kind = kind;
  this.healthPoints = healthPoints;
}

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
