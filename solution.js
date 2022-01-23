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

let OGRArray = [...diagnosticReport], CSRArray = [...diagnosticReport], oxygenGeneratorRating, CO2ScrubberRating, lifeSupportRating, index = 0;

function filterAt(index, array, type) {
    let zeroValueArray = [];
    let oneValueArray = [];
    
    // If array only has one value, stop
    if(array.length == 1) {
        return array[0];
    }

    // Go through the array, and place each value at the index into a separate array
    array.forEach(binaryNumber => {
        if(binaryNumber.charAt(index) == '1') {
            oneValueArray.push(binaryNumber);
        } else {
            zeroValueArray.push(binaryNumber);
        }
    });

    // return either zeroValueArray or oneValueArray
    if(type == "OGR") {
        if(zeroValueArray.length > oneValueArray.length) {
            array.splice(0, array.length, ...zeroValueArray);
            return [...zeroValueArray];
        } else {
            array.splice(0, array.length, ...oneValueArray);
            return [...oneValueArray];
        }
    } else {
        if(zeroValueArray.length <= oneValueArray.length) {
            array.splice(0, array.length, ...zeroValueArray);
            return [...zeroValueArray];
        } else {
            array.splice(0, array.length, ...oneValueArray);
            return [...oneValueArray];
        }
    }
}

function getLifeSupportRating(oxygenGeneratorRating, CO2ScrubberRating) {
    return lifeSupportRating = oxygenGeneratorRating * CO2ScrubberRating;
}

while(OGRArray.length > 1 || CSRArray.length > 1) {
    if(OGRArray.length > 1) {
        filterAt(index, OGRArray, 'OGR');
    }
    if(CSRArray.length > 1) {
        filterAt(index, CSRArray, 'CSR');
    }

    if(index < (diagnosticReport[0].length)) {
        index++;
    } else {
        index = 0;
    }
}

oxygenGeneratorRating = parseInt(OGRArray[0], 2);
CO2ScrubberRating = parseInt(CSRArray[0], 2);
lifeSupportRating = getLifeSupportRating(oxygenGeneratorRating, CO2ScrubberRating);

module.exports = {
    filterAt,
    getLifeSupportRating
}