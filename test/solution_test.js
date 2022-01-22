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