var assert = require('chai').assert;
var solution = require('../solution');

class Board {
    constructor(tileRows) {
        this.tileRows = tileRows;
    }
}

class Tile {
    constructor(value, marked) {
        this.value = value;
        this.marked = marked;
    }
}

describe('Turn', function() {
    it('Is the board a winning one', function() {
        let board =
            `14 21 17 24  4
            10 16 15  9 19
            18  8 23 26 20
            22 11 13  6  5
             2  0 12  3  7`
        ;
        // Parse the current board
        let parsedBoards = solution.parseBoards(board), parsedBoard = parsedBoards[0];
        // Mark all values in 1 row of the board
        for(let i = 0; i < parsedBoard.tileRows[0].length; i++) {
            parsedBoard.tileRows[0][i].marked = true;
        }
        assert.equal(solution.isWinningBoard(parsedBoard), true);
    });
});

describe('After finding the winning board', function() {
    it('Is the final score of the winning board equal to the sum of all unmarked numbers on that board multiplied by the winning number', function() {
        let randomNumber = 24;
        let board =
            `14 21 17 24  4
            10 16 15  9 19
            18  8 23 26 20
            22 11 13  6  5
             2  0 12  3  7`
        ;
        // Parse the current board
        let parsedBoards = solution.parseBoards(board), parsedBoard = parsedBoards[0];
        // Mark all values in 1 row of the board
        for(let i = 0; i < parsedBoard.tileRows[0].length; i++) {
            parsedBoard.tileRows[0][i].marked = true;
        }
        assert.equal(solution.getFinalScore(randomNumber, parsedBoard), 5880);
    });
});