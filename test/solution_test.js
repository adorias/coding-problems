var assert = require('chai').assert;
var solution = require('../solution');

describe('Solution', function() {
    it('solution should return hello world', function() {
        assert.equal(solution(), 'Hello World');
    });
});