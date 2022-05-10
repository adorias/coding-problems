var assert = require('chai').assert;
var solution = require('../solution');

describe('Submarine Movement', () => {
    it('Submarine should increase aim by 5 units', () => {
        let movement = 'down 5';
        assert.equal(solution.move(movement), 'Aim increased by 5');
    });
    it('Submarine should decrease aim by 5 units', () => {
        let movement = 'up 5';
        assert.equal(solution.move(movement), 'Aim decreased by 5');
    });
    it('Submarine should increase horizontal position by 5 units and increase depth by aim (5) multiplied by 3', () => {
        let movement = 'forward 3', aim = 5;
        assert.equal(solution.move(movement, aim), 'Horizontal Postion increased by 3, depth increased by 15');
    });
    it('Final horizontal position and final depth should be multiplied', () => {
        let horizontalPos = 15, depth = 10;
        assert.equal(solution.product(horizontalPos, depth), 150);
    });
});
let assert = require('chai').assert;
const { Submarine } = require("../solution.js");

describe('Total depth measurement', () => {
    it('Increases', () => {
        let depths = [0,1];
        let submarine = new Submarine(depths);

        assert.equal(1, submarine.increaseCount());
    })

    it('Returns 0 if only 1 value provided', () => {
        let depths = [1];
        let submarine = new Submarine(depths);

        assert.equal(0, submarine.increaseCount());
    })

    it('Returns 0 if all values are decreasing', () => {
        let depths = [3,2,1];
        let submarine = new Submarine(depths);
   
        assert.equal(0, submarine.increaseCount());
    })
    
})


describe('Total depth measurement taking into account sliding windows', () => {
    it('convert depths to sliding window sums if we only have 3 values', () => {
        let depths = [1,1,1];
        let submarine = new Submarine(depths);
        assert.sameOrderedMembers([3], submarine.calculateSlidingWindowSums(windowSize=3));
    })

    it('convert depths to sliding window sums if we have 3 sliding window multiples', () => {
        let depths = [1,1,1,1,1];
        let submarine = new Submarine(depths);
        assert.sameOrderedMembers([3,3,3], submarine.calculateSlidingWindowSums(windowSize=3));

    })
})

/*
Notes from session:

Better names for test cases
Mention edge cases, test the if you have time
Import/Export needs to be worked on
Create your solutions using clean code (classes, separation of concerns)
Get familiar with built-in functions (map, reduce, slice, splice, etc...)
Let the test work around the solution, and nto the other way around
Shopify CEO: pair program to solve a program in 1 hour. If you can't, scrap everything, and retry until you can solve it in an hour.

*/

 class ArgumentError extends Error {}

 class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
 function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70) {
    throw new Error('Temp too high');
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
 function reportOverheating(temperature) {
  if(temperature == null) {
    throw new ArgumentError('ArgumentError');
  }
  if(temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
 function monitorTheMachine(actions) {

}

throw new ArgumentError('ArgumentError');
