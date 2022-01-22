let movements = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
]

let horizontalPos = 0, depth = 0;

function move(movement) {
    let [command, value] = movement.split(' ');
    switch(command) {
        case 'forward':
            horizontalPos = horizontalPos + parseInt(value);
            return 'Moved horizontally by ' + value;
        case 'down':
            depth = depth + parseInt(value);
            return 'Increased in depth by ' + value;
        case 'up':
            depth = depth - parseInt(value);
            return 'Decreased in depth by ' + value;
        default:
            return -1;
    }
}

function product(horizontalPos, depth) {
    return horizontalPos * depth;
}

movements.forEach(movement => {
    move(movement);
});

console.log(product(horizontalPos, depth));

module.exports = {
    move,
    product
}