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

let randomNumbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
let boardsStr =
`22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`
;

function isWinningBoard(board) {    
    for(let i = 0; i < board.tileRows.length; i++) {
        let countRow = 0, countCol = 0;
        for(let j = 0; j < board.tileRows.length; j++) {
            if(board.tileRows[i][j].marked == true) {
                countRow++;
            }
            if(board.tileRows[j][i].marked == true) {
                countCol++;
            }
        }
        // If either the row or the column is fully marked, then it's a winning board.
        if(countRow == board.tileRows.length || countCol == board.tileRows.length) {
            return true;
        }
    }
    // Otherwise, this isn't a winning board.
    return false;

}

function getFinalScore(winningNumber, board) {
    let sum = 0;
    board.tileRows.forEach(tileRow => {
        tileRow.forEach(tile => {
            if(tile.marked == false) {
                sum += parseInt(tile.value);

            }
        });
    });
    console.log('sum: ' + sum);
    console.log('final score: ' + (sum * winningNumber));
    return (sum * winningNumber);
}

function parseBoards(boardsStr) {
    // Initialize arrays. Use regex to convert all board string values into array values.
    let boardsArr = boardsStr.split(/\s+/), boardsObjs = [], boards = [];

    // Turn all array values into tiles.
    boardsArr.forEach(tile => {
        boardsObjs.push(new Tile(tile, false));
    });

    // Separate tiles into Boards.
    while(boardsObjs.length) {
        boards.push(new Board(boardsObjs.splice(0, 25)));
    }

    // Turn 1D boards into 2D boards. (easier manipulation).
    boards.forEach(board => {
        let tempArr = [];
        while(board.tileRows.length) {
            tempArr.push(board.tileRows.splice(0, 5));
        }
        board.tileRows = tempArr;
    });

    return boards;
}

let boards = parseBoards(boardsStr);

// Go through each number sequentially, until you find a winning board
//NOTE: For loop used in order to be able to use "break", which isn't allowed in a forEach loop.
for(let i = 0; i < randomNumbers.length; i++) {
    let winTracker = false;
    // For each board
    boards.forEach(board => {
        // Mark the tile when the number is found (if available)
        board.tileRows.forEach(tileRow => {
            tileRow.forEach(tile => {
                // If the tile has the same value as the random number
                if(tile.value == randomNumbers[i]) {
                    // Mark the tile
                    tile.marked = true;
                    // Check if the board won
                    if(isWinningBoard(board)) {
                        // Get the final score
                        console.log(randomNumbers[i]);
                        console.log(board);
                        getFinalScore(randomNumbers[i], board)
                        // Break out of for loop
                        winTracker = true;
                    }
                }
            })
        });
    });
    // If the winning board is found, end the game.
    if(winTracker == true) {
        break;
    }
}

module.exports = {
    parseBoards,
    isWinningBoard,
    getFinalScore
}