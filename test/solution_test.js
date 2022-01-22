let assert = require('chai').assert;
let compareMeasurements = require('../solution');

describe('Total depth measurement', () => {
    it('Increased', () => {
        let currentMeasurement = 205;
        let previousMeasurement = 200;
        let index = 3;
        assert.equal(compareMeasurements(currentMeasurement, previousMeasurement, index), 'Increased');
    });
    it('Decreased', () => {
        let currentMeasurement = 199;
        let previousMeasurement = 200;
        let index = 2;
        assert.equal(compareMeasurements(currentMeasurement, previousMeasurement, index), 'Decreased');
    });
    it('Did not change', () => {
        let currentMeasurement = 200;
        let previousMeasurement = 200;
        let index = 1;
        assert.equal(compareMeasurements(currentMeasurement, previousMeasurement, index), 'No change');
    });
    it('has no previous measurement', () => {
        let currentMeasurement = 200;
        let previousMeasurement = null;
        let index = 0;
        assert.equal(compareMeasurements(currentMeasurement, previousMeasurement, index), 'No previous measurement');
    });
});

/*






*/