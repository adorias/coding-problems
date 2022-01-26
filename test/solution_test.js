var assert = require('chai').assert;
var solution = require('../solution');

describe('Populate diagram', function() {
    it('is mapping the coordinate to the diagram', function() {
        // For testing purposes, let's assume a 3x3 diagram
        let coordinate = [0,2,2,2];
        let diagram = [['.','.','.'],['.','.','.'],['.','.','.']];
        assert.equal(solution.mapCoordinate(coordinate, diagram), [['.','.','.'],['.','.','.'],['1','1','1']]);
    });
});

describe('Determine overlapping lines', function() {
    it('should figure out how many positions have overlapping lines ', function() {
        let diagram = [['1','2','1'],['.','2','.'],['2','3','1']];
        assert.equal(solution.getOverlapCount(diagram), 4);
    });
});