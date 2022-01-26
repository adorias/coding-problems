class Diagram {
    constructor(positionRows) {
        this.positionRows = positionRows;
    }
}

class Position {
    constructor(value) {
        this.value = value;
    }
}

class Line {
    constructor(line) {
        this.line = line;
    }
}

let coordinates, diagram, overlapCounter, coordinatesStr = 
`0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`
;

function parseCoordinates(coordinatesStr) {
    let coordinatesArr = coordinatesStr.split(/ -> |\r?\n|,/), coordinates = [];

    while(coordinatesArr.length) {
        coordinates.push(new Line(coordinatesArr.splice(0, 4)));
    }

    return coordinates;
}

function createDiagram() {
    let diagram = new Diagram([]), tempArr = [];
    
    for(let i = 0; i < 100; i++) {
        diagram.positionRows.push(new Position('.'));
    }

    while(diagram.positionRows.length) {
        tempArr.push(diagram.positionRows.splice(0, 10));
    }
    diagram.positionRows = tempArr;

    return diagram;
}

function mapLine(line, diagram) {
    let x1 = parseInt(line[0]), y1 = parseInt(line[1]), x2 = parseInt(line[2]), y2 = parseInt(line[3]);
    if(x1 == x2) {        
        if(y1 >= y2) {
            for(let i = y2; i <= y1; i++) {
                if(diagram.positionRows[x1][i].value == '.') {
                    diagram.positionRows[x1][i].value = 1;
                } else {
                    diagram.positionRows[x1][i].value++;
                }                
            }
        } else {
            for(let i = y1; i <= y2; i++) {
                if(diagram.positionRows[x1][i].value == '.') {
                    diagram.positionRows[x1][i].value = 1;
                } else {
                    diagram.positionRows[x1][i].value++;
                }                
            }
        }
    } else if(y1 == y2) {
        if(x1 >= x2) {
            for(let i = x2; i <= x1; i++) {
                if(diagram.positionRows[i][y1].value == '.') {
                    diagram.positionRows[i][y1].value = 1;
                } else {
                    diagram.positionRows[i][y1].value++;
                }                
            }
        } else {            
            for(let i = x1; i <= x2; i++) {
                if(diagram.positionRows[i][y1].value == '.') {
                    diagram.positionRows[i][y1].value = 1;
                } else {
                    diagram.positionRows[i][y1].value++;
                }                
            }
        }
    }
}

function getOverlapCount(diagram) {
    let count = 0;
    diagram.positionRows.forEach(positionRow => {
        positionRow.forEach(position => {
            if(position.value >= 2) {
                count++;
            }
        })
    })
    return count;
}

coordinates = parseCoordinates(coordinatesStr), diagram = createDiagram();

coordinates.forEach(line => {
    mapLine(line.line, diagram);
    console.log(diagram.positionRows);
})

overlapCounter = getOverlapCount(diagram);
console.log(overlapCounter);

module.exports = {
    mapLine,
    getOverlapCount
}