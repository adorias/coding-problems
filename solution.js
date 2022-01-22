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

let increaseCount = 0, previousSum = null;

function getCurrentSum(currentMeasurement, firstPrevMeasurement, secondPrevMeasurement) {
    if(firstPrevMeasurement != null && secondPrevMeasurement != null) {
        return currentMeasurement + firstPrevMeasurement + secondPrevMeasurement;
    } else {
        return null;
    }
}

function compareSums(currentSum, previousSum) {
    if(previousSum != null) {
        if(currentSum > previousSum) {
            increaseCount++;
            console.log(currentSum + " (increased)");
            return 'Increased';
        } else if(currentSum < previousSum) {
            console.log(currentSum + " (decreased)");
            return 'Decreased';
        } else {
            console.log(currentSum + " (no change)");
            return 'No change';
        }
    } else {
        console.log(currentSum + " (N/A - no previous sum)");
        return 'No previous sum';
    } 
}

depthMeasurements.forEach((currentMeasurement, index) => {
    let firstPrevMeasurement = depthMeasurements[index - 1], secondPrevMeasurement = depthMeasurements[index - 2];

    let currentSum = getCurrentSum(currentMeasurement, firstPrevMeasurement, secondPrevMeasurement);
    if(currentSum != null) {
        compareSums(currentSum, previousSum);
        previousSum = currentSum;
    }
});

console.log("Total number of sum increases: " + increaseCount);

module.exports = {
    compareSums,
    getCurrentSum
};
