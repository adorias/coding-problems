module.exports = function() {
    return "Hello World";
}

let depthMeasurements = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
];

let increaseCount = 0;

function compareMeasurements(currentMeasurement, previousMeasurement, index) {
    if(index > 0) {
        if(currentMeasurement > previousMeasurement) {
            increaseCount++;
            console.log(currentMeasurement + " (increased)");
            return 'Increased';
        } else if(currentMeasurement < previousMeasurement) {
            console.log(currentMeasurement + " (decreased)");
            return 'Decreased';
        } else {
            console.log(currentMeasurement + " (no change)");
            return 'No change';
        }
    } else {
        console.log(currentMeasurement + " (N/A - no previous measurement)");
        return 'No previous measurement';
    } 
}

depthMeasurements.forEach((currentMeasurement, index) => {
    let previousMeasurement = depthMeasurements[index - 1];
    compareMeasurements(currentMeasurement, previousMeasurement, index);
});

console.log("Total number of measurement increases: " + increaseCount);

module.exports = compareMeasurements;
