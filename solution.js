class Board {
    constructor(tileRows, winningBoard) {
        this.tileRows = tileRows;
        this.winningBoard = winningBoard;
    }
}

class Tile {
    constructor(value, marked) {
        this.value = value;
        this.marked = marked;
    }
}

let randomNumbers = [68,30,65,69,5,78,41,73,55,0,76,98,79,42,37,21,9,34,56,33,64,54,24,43,15,58,61,38,12,20,4,26,87,95,94,89,83,74,97,77,67,40,63,88,19,31,81,80,60,14,18,47,93,57,17,90,84,85,48,6,91,7,86,13,51,53,8,16,23,66,36,39,32,82,72,11,52,28,62,70,59,50,1,46,96,71,35,10,25,22,27,99,29,45,44,3,75,92,49,2], gameOver = false, boardWins = 0, boardsStr =
`68 16 83 90 69
14 89 72 33  6
63 21 43 64 76
79 65 87 98 85
41 24 32 53 93

15 94 72 30  6
14 80 66  4 78
44 81 68 67 96
65 21 64 97 35
84 90 28 60  2

97 39 61 15 94
75 14 66 98 31
58 80  9 64 56
19 42 16 85 37
25 22 38 65 82

86 31 71 11 56
99 12 17 10 46
 5 33 85 61  2
30  1 28 88 66
15 38 21 54 64

38 52 84 75 91
77  5 49 71 31
45  1 60  0 10
68 29 98 36 34
61 90 93 14 12

91 66 28 41 78
89 16 10 77 39
84 57 44 32 47
60 62 26 21 50
75 61 24 54 93

 2 69 99  8 20
14 35 61 85 73
39 94 37 63 12
57 23 30 50 17
34 70 19 28 77

50 82 41 59 52
43 76 85 63 48
56 67 60 33 45
42  9 91 23 16
96  6 34 30 44

 0 41 24 42 83
17  1 34 29 71
46 67 86 64 21
95 36  6 38 62
93  8 30 77 44

 6 94 11 14 83
65 85 97 37 55
56 19 91 69  1
26 59 13 96 68
 4 28  7 45 53

96 78  2 32 65
 3 63 74 17  4
76 11 91 48 70
71 55 69 13 49
88 30 23 59 10

28  4 34 64 47
99 86 44 59 43
50 91 35 92 51
32 21 19 74 33
10 29 66 52 94

 0 27 12 23 71
54 59 32 47 45
22 85 94 34 31
29 68 44 61 62
96 46 52 33 69

37 79 34 17 56
26 62  3 77 80
88 35 71 87 36
89 60 86 19 48
82 97 95 85  0

62 49 48 98 10
89 37 50 64 17
80  5 26 42 51
58 74  6 20 14
72  2  9 40 69

71 37 47 21 39
36 29 26 82 53
10 17 96 15 43
 8 92 19  6 32
77 89 38 54 13

16 58 67 23 98
43 42 26 46 13
32 22 27 20 21
37 33 55 86  1
99 40 17 44 94

81 59 53 27 36
11 88 92 57 44
 2 26 93 94 77
76 47 82 19 75
99 34 98 37 32

28 13 57 99  7
42 93 10 76 43
 1 52  3 20 53
82 81 51  2 92
94 35 49 37  0

 5 30 61 77 44
82 67 98  1 90
18 62 27 24 15
16 20 71 69 19
85 96 25  7 55

39 51  4 32 30
64 22 29 48 60
78 31 44 59 92
65 10 68 84 16
40 70 35 26 56

54 83 12 79 66
21 49 70  2 24
20 51 71 99 50
82 36 57 96 22
78 52 67 33 72

 3 62  5 14 63
54 75 28 22 51
 1 55 86 30 70
 9  6 92 83 85
71 78 96 47 17

71 59 38 27  2
90  6 97 75 84
29 69 45 11 65
46 31 79  4  8
51 76 74 87 19

83 67 10 39 57
 7 63 12 59  2
54 99 95 88 40
38 71 84 61 56
81 90 36 58 19

 4 47 21 28 46
22 40 94 83 86
82 17 43  0 45
55 36 68 35 84
52 24  6 80  2

29 16 75 26 87
 6 82 67 36 24
13 95 35 43 40
80 68  0 79 71
34 44 21 30 85

91 25 24 15 23
93 14 50 75 74
88 30 64 52  8
 1  7  0  4 80
96 82 98 81 67

52 21 71 78  4
45 73 27 30 56
 7 93 67  6  1
54 20 57 69  2
94 36 89 46 68

86 95 15  7 18
 8 87 29 11 74
71 72 43 76 40
 6 60 44 19 99
97 85  5 39 77

49 14  5 48 33
95 21 30  1 47
87 84 85 10 24
32 86 99 31 23
69  2 43 37 60

57 48 99 49 73
31 92 76 60 96
47 28 15 70 26
68 19 56 67 95
12 23 45 88  6

77 49 23 42 62
47  7 80 43  4
59 72 87 14 84
66 81 96 97 78
61 91  8 17 48

21 25  1 82 20
78 31 15 30 73
46 11 13 35 79
60 22 97 32  4
23 88 63 17 75

 6  3 41  5 44
91 21 32 49 81
29 85 47 20 14
99 31 43 22 69
90  4 45  8 16

12 15 96  3 21
38 71 16 39 24
77 82 57 55 92
27 17 19 73 31
74 48 34 72 14

80 16 10 79 55
93 60  4  0 29
 7 97  3  9 86
43 67 78 64 35
44 83 40 33 12

36 88 22 21 70
30 60 13  6 41
71 89 86 17 39
73  0 75 32  9
 5 10 83 85 99

40 41 76 38 25
21 49 79 47 39
27 88 34 81 24
69 64 36 32  4
57  5 58 67 56

25 95 41 27 19
93  0 29 56  8
 2 17 66 11 82
96 55 44 39  5
67  4 33 62 40

85 12 46 59 36
91 29 19 63  0
72 49 14  6 95
18 50 60 67 80
10 62 39 82 58

11 87  4 76 75
64 47 26 74 98
89 30 68 21 88
45 41 77 67 53
96 92 44  1 18

33 26 21  8 76
15 27 41 43 52
64 85 56 57 66
11 73 62 69  4
36 13 94 86 55

93 80 67 23  6
57 20 29 69  1
76 96 72 95 33
32 91 52 16 83
26 54 13 94 47

56  0 58 15 45
91 40 86 61 60
14 47 30  5 24
21 12 33 69 41
78 98  9 99 46

59  1 63 96 14
15 56 23 85 84
29 98 44 87 46
75  8 21 54 65
80 30 40 45  6

99 40 87  4 63
64 78 50 74 58
37 47 61 48 59
65 56 45 89 67
18 70 71 90 32

42 35  1  9 90
89 13  0 88 17
67 82 31 77 91
60 29 68 10 64
20 92 46 71 95

 0 32 81 13 63
87 17  2 56 69
23 33 29 67 24
98 95 86 36 31
99 42 35 93  1

71 79 38 84 29
26 31 73  1 48
94 85  3 82 89
19 17 98 92 47
96 45 11 70 51

14 69 61 56 33
98 88 82 76 66
87 92 42 99 35
 0 68  6 44 47
 4 91 54 62 23

10 23 20 40 96
33  0 21 94 25
 4 67 30 88 54
43 41 60  1 82
18 78 74 98 91

60 95 53  7 11
67 54 44 18  0
89 98 24 55 37
39  5 27 62 21
75 25 43 47 71

 5 95 60 19  3
13 15 42 97 67
61 79  7 12 39
53 58 89 25 34
 9 11 96 21 66

89 97 45 84 67
37 22 64 39 95
68 63  6 90 80
92 26 33 35 19
29 70  5 72 31

52 46 53  6 31
77  8 59 99 49
11 48  4 90 91
41 70 58 16 44
 7 61  9 80 50

75  0 38 37 33
99 66 98 14 62
46 51 43 34 24
71 92 80 32 22
60 39 17 52 45

92 49 80 99 16
 6 77 65  9  4
34 91 86 43 21
 0  3 27 84 81
28  5 19 95 76

 5 40 26 89  1
51 30 75 46 31
35 58 86 80  0
98 38 27 81 93
63 60 39 65 87

27 56 90 44 60
48 68 47 96 73
75 13 80 12 38
81 21 20 46 97
67  6 72 76  2

33 96  4 55 49
74 43 54  6 51
30  0 75 28 62
90 81  2 83 68
39 95 70 84 42

97 22 15 30 45
92 96 50 16 42
39 23 89 21  2
72 98 58 48 82
94 11  1 86 84

41 13 84 51 76
33 63  0 62 18
81 32 57 68 21
20 64 47 24 93
 7 56 27 66 30

52 81 85 92  3
15 91 19 13 93
36 77 74 37 26
67 16 73 89 33
43 90 38 31 29

 1 52 96 66 86
30 15 26 82 42
 8 94 41 54  5
84 23 72 77  7
34 53 18 69 90

 7 67 35  2 36
91 51 56 85 32
98 22 76 97 71
70 29 68 44  1
 8 80 42 46 93

 4 13 90 64 97
44 28 17 42 18
72 77 11 35 22
25 73 41  1 26
51  8 92 43  2

 6 68 51 73 39
32 60 34 74 18
 5 95 11  8 62
23  3 70 94 54
36 20 29 10 26

66 80 77 82 62
95 25 33 50 14
94  0 91 46 23
59 47 96 26 15
69  6  2 34 75

72 66 35 81 69
48 44 11 16 40
94  5  3 51 54
89  6 78 37 59
76 45  8 18 10

30 46 96 56 69
66 29 32 74  4
85 84 99 87 92
22 50 64 15 57
78 47  1 48 10

66 48 90 67 23
 3 21 73 71 18
97 52 64 80 94
49 42 75 47 38
 4 28 19 68 57

53 46 56 84 57
55 45 85 89 76
80 26  2 36 23
92 10 30 18 69
67 49 21  8 44

51 47 85 41  8
70 34 98 30 16
82 22 18 95 73
65 21 49  5 15
56 19 17 23 46

25 28 47 84  8
35 90 13 39 15
50 86 41 33 51
57 73 87 45  5
31 22 48  7 27

79 71 64 87 21
10 73  1 40  9
36 84 80  6 60
19 81 55 50 56
67 23 62 86 63

87 45 56 67 13
 8 79 31 48 86
32 15 88  6 66
62 27 44 26 99
64 63  3 70 90

84 87 89 71  2
63 67 72  3 75
39 44 54 20 85
 1 97 14 37 98
25 66 92 17 57

27 34 64 60 87
77 29 21 56 23
79 53 75 72 69
95 16 85 52 70
92 65 62 33 15

42 87 96 79 90
97 77 58 62 55
11 86 68 44 52
93 23  1 61 60
47 72 14 28 13

14 78 68 48 74
50 32 29 24 54
73 99 57 90 64
12 76 62 15 44
70 58 22  1 85

49  2 75 88 87
71 61 95  5 38
99 86 67  8 83
17 11  9 54 33
70 78 62  1 58

11 44 53 73 13
45 95 15 63 49
94 34 99 64 10
78  9 67 12 20
50 97 96 89 14

55  3 72 93 81
25 43 60 85 26
96 45 53 19 40
73 42 76 47 80
74 69 22 23 89

24 59 62 91  5
51 75 76 29 35
86 96 94 66 55
87 61 82 40 32
28 22 27 21 49

66 80 82 46 13
97 67 41 63  1
65 89 22 12 15
94 96  9 91 48
85  3 60 95  8

57 90 97 56 33
79 15 75 70 41
21 26 20 98 81
18 36 24 76 35
42 27 11 67  0

89 31 86 10 13
81  8 16  0 77
92 67 39 96 74
90  7 75 55 65
51  2 97 58 17

92 55  4 83 93
31 21 74 73 68
18 41 32 17 77
56 94 98 72 87
19  6 49 11 37

15 79 24 60 91
25 41 63 32 56
13 83 69  0 57
77  7 62 45 98
64 37 94 55  9

81 42 29 98 44
16 83 27 92 60
22 63 79 64 45
80 38 56  5  2
 0  4 34 37 59

90 85 32 97 52
69 37 57 29 51
22  4 99 67 84
 0  2 76 34 47
63 96 94 83 40

72 68 70 40 39
22  7 62 46 76
25 31 41 71  9
30 52 78 26 10
53 17 45 16 98

66 39 96 16 67
46 34 27 49  2
93 25 50 70 57
33 69 64 30 45
10 91 20 18  3

32 35 71 62 43
24 57 46 39 87
28 21 26 31 52
99 60 14  6 97
 1 44 89 33 93

47 15 21 23 20
 4 50  6 93 44
38 53  2 45 42
83 57 63 17 24
99  5 34 66  0

65 91 60 50 62
16  2 51 14 32
81 17 58 59 77
29 98 72 28  3
15 99 49 37  5

62 23 48 80 28
68  2 71 89 36
13 95 64 98  8
60 86 51 74 11
35 27 66 78  7

65  9 57 85 30
29 52 27 83 98
 7 48 45 21 93
 5 71 54 34 91
96 87 25 84 63

38 94 65 69 18
79 81 80 36 91
17  2 23 53 98
92 68 21 74 55
 3 58 72 70 86`
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
        boards.push(new Board(boardsObjs.splice(0, 25), false));
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
    let randomNumber = randomNumbers[i];
    // For each board
    boards.forEach(board => {
        if(board.winningBoard == false) {
            // Mark the tile when the number is found (if available)
            board.tileRows.forEach(tileRow => {
                tileRow.forEach(tile => {
                    // If the tile has the same value as the random number
                    if(tile.value == randomNumber) {
                        // Mark the tile
                        tile.marked = true;
                        // Check if the board won
                        if(isWinningBoard(board)) {
                            board.winningBoard = true;
                            boardWins++;
                            // If this is the last board to win
                            if(boardWins == boards.length) {
                                // Get the final score
                                console.log(randomNumber);
                                console.log(board);
                                getFinalScore(randomNumber, board)
                                // Break out of for loop
                                gameOver = true;
                            }
                        }
                    }
                })
            });
        }
    });
    // If the winning board is found, end the game.
    if(gameOver == true) {
        break;
    }
}

module.exports = {
    parseBoards,
    isWinningBoard,
    getFinalScore
}