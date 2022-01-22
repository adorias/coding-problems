let assert = require('chai').assert;
let solFunctions = require('../solution');

describe('Comparing current and previous sums', () => {
    it('Increased', () => {
        let currentSum = 618, previousSum = 607;
        assert.equal(solFunctions.compareSums(currentSum, previousSum), 'Increased');
    });
    it('Decreased', () => {
        let currentSum = 624, previousSum = 632;
        assert.equal(solFunctions.compareSums(currentSum, previousSum), 'Decreased');
    });
    it('Did not change', () => {
        let currentSum = 622, previousSum = 622;
        assert.equal(solFunctions.compareSums(currentSum, previousSum), 'No change');
    });
    it('has no previous sum', () => {
        let currentSum = 607, previousSum = null;
        assert.equal(solFunctions.compareSums(currentSum, previousSum), 'No previous sum');
    });
});

describe('Getting the current sum', () => {
    it('All variables have values', () => {
        let currentMeasurement = 199, firstPrevMeasurement = 200, secondPrevMeasurement = 208;
        assert.equal(solFunctions.getCurrentSum(currentMeasurement, firstPrevMeasurement, secondPrevMeasurement), 607);
    });
    it('one variable has missing value', () => {
        let currentMeasurement = 199, firstPrevMeasurement = 200, secondPrevMeasurement = null;
        assert.equal(solFunctions.getCurrentSum(currentMeasurement, firstPrevMeasurement, secondPrevMeasurement), null);
    });
    it('two variables have missing values', () => {
        let currentMeasurement = 199, firstPrevMeasurement = null, secondPrevMeasurement = null;
        assert.equal(solFunctions.getCurrentSum(currentMeasurement, firstPrevMeasurement, secondPrevMeasurement), null);
    });
});

/*






*/