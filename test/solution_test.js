var assert = require('chai').assert;
var solution = require('../solution');

describe('Diagnostic report evaluation', function() {
    it('Is the binary number incrementing when each position is equal to 1', function() {
        let binaryNumber = 11111;
        assert.equal(solution.decodeNumber(binaryNumber), 'Incremented at position: 0,1,2,3,4');
    });
    it('Is the binary number not incrementing when each position is equal to 0', function() {
        let binaryNumber = 00000;
        assert.equal(solution.decodeNumber(binaryNumber), 'Incremented at position: ');
    });
    it('Is the power consumption equal to the gamma rate multiplied by the epsilon rate', function() {
        let gammaRate = 34;
        let epsilonRate = 12;
        assert.equal(solution.getPowerConsumption(gammaRate, epsilonRate), 408);
    });
});