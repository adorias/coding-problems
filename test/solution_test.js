var assert = require('chai').assert;
var solution = require('../solution');

describe('Oxygen Generator Rating', function() {
    it('Is the array being filtered by the most common value', function() {
        let diagnosticReport = [
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010'
        ]
        assert.equal(JSON.stringify(solution.filterAt(0, diagnosticReport, 'OGR')), JSON.stringify(['11110','10110','10111','10101','11100','10000','11001']));
    });
    it('If equally common, is the array keeping all values with a 1', function() {
        let diagnosticReport = [
            '10110',
            '10111',
        ]
        assert.equal(JSON.stringify(solution.filterAt(4, diagnosticReport, 'OGR')), JSON.stringify(['10111']));
    });
    it('If you have only 1 number left, is it stopping.', function() {
        let diagnosticReport = [
            '10111',
        ]
        assert.equal(solution.filterAt(0, diagnosticReport, 'OGR'), ['10111']);
    });
});

describe('CO2 Scrubber Rating', function() {
    it('Is the array being filtered by the least common value', function() {
        let diagnosticReport = [
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010'
        ]
        assert.equal(JSON.stringify(solution.filterAt(0, diagnosticReport, 'CSR')), JSON.stringify(['00100','01111','00111','00010','01010']));
    });
    it('If equally common, is the array keeping all values with a 0', function() {
        let diagnosticReport = [
            '01111',
            '01010',
        ]
        assert.equal(JSON.stringify(solution.filterAt(4, diagnosticReport, 'CSR')), JSON.stringify(['01010']));
    });
    it('If you have only 1 number left, is it stopping.', function() {
        let diagnosticReport = [
            '01010',
        ]
        assert.equal(solution.filterAt(0, diagnosticReport, 'CSR'), ['01010']);
    });
});

describe('Life Support Rating', function() {
    it('Is the life support rating equal to the oxygen generator rating multiplied by the CO2 scrubber rating', function() {
        let oxyGenRating = 34;
        let CO2ScrubberRating = 12;
        assert.equal(solution.getLifeSupportRating(oxyGenRating, CO2ScrubberRating), 408);
    });

});