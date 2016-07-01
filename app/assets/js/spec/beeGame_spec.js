describe('Bee', function() {
  var testBee

  beforeEach(function() {
    testBee = new Bee("Test Bee", "tester", 100)
  })

  it('should create an instance of Bee', function() {
    expect(testBee).toBeDefined()
  })

  it('should set all the properties', function() {
    expect(testBee.name).toEqual("Test Bee")
    expect(testBee.kind).toEqual("tester")
    expect(testBee.healthPoints).toEqual(100)
  })
})

describe('fabricOfBees()', function() {
  var listOfTesters = []

  beforeEach(function() {
    listOfTesters = fabricOfBees(2, "Test Bee", "tester", 100)
  })

  it('should return an array with one or more bees', function() {
    expect(fabricOfBees()).toEqual([])
    expect(listOfTesters).toEqual([
      jasmine.objectContaining({ name : 'Test Bee 1', kind : 'tester', healthPoints : 100 }),
      jasmine.objectContaining({ name : 'Test Bee 2', kind : 'tester', healthPoints : 100 })
    ])
  })
})

describe('randomNumber()', function() {
  it('should return a random number', function() {
    expect(randomNumber(2)).toEqual(jasmine.any(Number))
  })
})

describe('whichBeeToHit()', function() {
  it('should return the position of the one bee', function() {
    var listOfTesters = fabricOfBees(2, "Test Bee", "tester", 100)
    expect(whichBeeToHit(listOfTesters)).toEqual(jasmine.any(Number))
  })
})

describe('Bee.prototype.decreaseHP', function() {
  it('should decrease a bee health points', function() {
    var testBee = new Bee("Test Bee", "tester", 100)
    testBee.decreaseHP(12)
    expect(testBee.healthPoints).toEqual(88)
    testBee.decreaseHP(12)
    testBee.decreaseHP(12)
    expect(testBee.healthPoints).toEqual(64)
  })
})
