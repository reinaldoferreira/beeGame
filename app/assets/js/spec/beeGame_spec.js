describe('Bee', function() {
  var beeTest

  beforeEach(function() {
    beeTest = new Bee('Test Bee', 'test', 100)
  })

  it('should create an instance of Bee', function() {
    expect(beeTest).toBeDefined()
  })

  it('should set all the properties', function() {
    expect(beeTest.name).toEqual('Test Bee')
    expect(beeTest.kind).toEqual('test')
    expect(beeTest.healthPoints).toEqual(100)
  })
})

describe('fabricOfBees()', function() {
  var listOfTesters = []

  beforeEach(function() {
    listOfTesters = fabricOfBees(2, 'Test Bee', 'test', 100)
  })

  it('should return an array with one or more bees', function() {
    expect(fabricOfBees()).toEqual([])
    expect(listOfTesters).toEqual([
      jasmine.objectContaining({ name : 'Test Bee 1', kind: 'test', healthPoints : 100 }),
      jasmine.objectContaining({ name : 'Test Bee 2', kind: 'test', healthPoints : 100 })
    ])
  })
})

describe('randomNumber()', function() {
  it('should return a random number', function() {
    expect(randomNumber(2)).toEqual(jasmine.any(Number))
  })
})

describe('whichBeeToHit()', function() {
  it('should return the position of one bee', function() {
    var listOfTesters = fabricOfBees(2, 'Test Bee', 'test', 100)
    expect(whichBeeToHit(listOfTesters)).toEqual(jasmine.any(Number))
  })
})

describe('Bee.prototype.decreaseHP', function() {
  it('should decrease a bee health points', function() {
    var beeTest = new Bee('Test Bee', 'test', 100)
    beeTest.decreaseHP(12)
    expect(beeTest.healthPoints).toEqual(88)
    beeTest.decreaseHP(12)
    beeTest.decreaseHP(12)
    expect(beeTest.healthPoints).toEqual(64)
  })
})

describe('getArrayOfBees()', function() {
  var beeTest
  var listOfTesters = []
  var anotherListOfTesters = []

  beforeEach(function() {
    beeTest = new Bee('Bee Test', 'test', 100)
    listOfTesters = fabricOfBees(2, 'Test Bee', 'test', 90)
    anotherListOfTesters = fabricOfBees(3, 'Another Test Bee', 'test', 80)
  })

  it('should return an array with all the bees passed as arguments', function() {
    expect(getArrayOfBees(beeTest, listOfTesters, anotherListOfTesters)).toEqual([
      jasmine.objectContaining({ name : 'Bee Test', kind: 'test', healthPoints : 100 }),
      jasmine.objectContaining({ name : 'Test Bee 1', kind: 'test', healthPoints : 90 }),
      jasmine.objectContaining({ name : 'Test Bee 2', kind: 'test', healthPoints : 90 }),
      jasmine.objectContaining({ name : 'Another Test Bee 1', kind: 'test', healthPoints : 80 }),
      jasmine.objectContaining({ name : 'Another Test Bee 2', kind: 'test', healthPoints : 80 }),
      jasmine.objectContaining({ name : 'Another Test Bee 3', kind: 'test', healthPoints : 80 }),
    ])
  });
});
