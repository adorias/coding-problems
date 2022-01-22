let movements = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
]

let horizontalPos = 0, depth = 0, aim = 0;

function move(movement) {
    // Replaces the value of the aim variable by the one given in the test case.
    if (arguments.length == 2) {
        aim = arguments[1];
    }

    let [command, value] = movement.split(' ');
    switch(command) {
        case 'forward':
            horizontalPos = horizontalPos + parseInt(value);
            depth = depth + (aim * parseInt(value));
            return 'Horizontal Postion increased by '+ value +', depth increased by ' + aim * parseInt(value);
        case 'down':
            aim = aim + parseInt(value);
            return 'Aim increased by ' + value;
        case 'up':
            aim = aim - parseInt(value);
            return 'Aim decreased by ' + value;
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