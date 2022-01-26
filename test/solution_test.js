var assert = require('chai').assert;
var solution = require('../solution');

describe('Populate diagram', function() {
    it('is mapping the coordinate to the diagram', function() {
        // For testing purposes, let's assume a 3x3 diagram
        assert.equal(solution.mapLine(coordinate, diagram), [['.','.','.'],['.','.','.'],['1','1','1']]);
    });
});

describe('Determine overlapping lines', function() {
    it('should figure out how many positions have overlapping lines ', function() {
        let diagram = createDiagram();
        console.log(diagram);
        assert.equal(solution.getOverlapCount(diagram), 5);
    });
});