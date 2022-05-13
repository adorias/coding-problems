var assert = require('chai').assert;
var solution = require('../solution');

describe('Solution', function() {
    it('should decrement all lanternfish by 1 everyday', function() {
        let input = new Map(), expected = new Map();
        input.set(1, 1);
        input.set(6, 1);
        input.set(4, 1);
        input.set(2, 1);
        expected.set(0, 1);
        expected.set(5, 1);
        expected.set(3, 1);
        expected.set(1, 1);
        const actual = solution.processADay(input);
        assert.deepEqual(actual, expected);
    });
    it('should create a new lanternfish when a lanternfish passes 0, and the value should reset to 6.', function() {
      let input = new Map(), expected = new Map();
      input.set(0, 1);
      input.set(6, 1);
      input.set(4, 1);
      input.set(2, 1);
      expected.set(6, 1);
      expected.set(5, 1);
      expected.set(3, 1);
      expected.set(1, 1);
      expected.set(8, 1);
      const actual = solution.processADay(input);
      assert.deepEqual(actual, expected);
    });
});