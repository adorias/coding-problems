var assert = require('chai').assert;
var solution = require('../solution');

describe('Submarine Movement', () => {
    it('Submarine should move horizontally by X units', () => {
        let input = 'forward 5';
        assert.equal(solution.move(input), 'Moved horizontally by 5');
    });
    it('Submarine should increase in depth by X units', () => {
        let input = 'down 5';
        assert.equal(solution.move(input), 'Increased in depth by 5');
    });
    it('Submarine should decrease in depth by X units', () => {
        let input = 'up 3';
        assert.equal(solution.move(input), 'Decreased in depth by 3');
    });
    it('Final horizontal position and final depth should be multiplied', () => {
        let horizontalPos = 15, depth = 10;
        assert.equal(solution.sum(horizontalPos, depth), 150);
    });
});