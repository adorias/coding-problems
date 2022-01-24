var assert = require('chai').assert;
var solution = require('../solution');

describe('Turn', function() {
    it('Is the chosen number called sequentially', function() {
        let randomNumbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
        let index = 2;
        assert.equal(solution.nextNumber(index), 9);
    });
    it('Is the number marked on the board that contains it', function() {
        let randomNumber = 9;
        let board = [
        '22 13 17 11  0',
       ' 8  2 23  4 24',
       '21  9 14 16  7',
       ' 6 10  3 18  5',
       ' 1 12 20 15 19',
        ]
        assert.equal(solution.mark(randomNumber, board), true);
    });
    it('Is the board a winning one', function() {
        let board = [
            '14 21 17 24  4',
            '10 16 15  9 19',
            '18  8 23 26 20',
            '22 11 13  6  5',
            ' 2  0 12  3  7',
        ];
        assert.equal(solution.isWinningBoard(board), true);
    });
});

describe('After finding the winning board', function() {
    it('Is the final score of the winning board equal to the sum of all unmarked numbers on that board multiplied by the winning number', function() {
        let randomNumber = 24;
        let board = [
            '14 21 17 24  4',
            '10 16 15  9 19',
            '18  8 23 26 20',
            '22 11 13  6  5',
            ' 2  0 12  3  7',
        ];
        assert.equal(solution.getFinalScore(randomNumber, board), 4512);
    });
});