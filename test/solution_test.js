var assert = require('chai').assert;
var solution = require('../solution');

describe('Solution', function() {
    it('should decrement all lanternfish by 1 everyday', function() {
        const inputs = [1,6,4,2];  
        const expected = [0,5,3,1];
        const actual = solution.processADay(inputs);
        assert.deepEqual(actual, expected);
    });
    it('should create a new lanternfish when a lanternfish passes 0, and the value should reset to 6.', function() {
      const inputs = [0,6,4,2];
      const expected = [6,5,3,1,8];
      const actual = solution.processADay(inputs);
      assert.deepEqual(actual, expected);
    });
});