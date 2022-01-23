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

let positionCounters =  new Array(diagnosticReport[0].length).fill(0), gammaRate, epsilonRate, powerConsumption;

function decodeNumber(binaryNumber) {
    let incrementTracker = 'Incremented at position: ';
    for (var i = 0; i < binaryNumber.length; i++) {
        if(binaryNumber.charAt(i) == '1') {
            positionCounters[i]++;
            incrementTracker = incrementTracker + i +',';
        }
    }
    return incrementTracker;
}

function getGammaRate() {
    for (var i = 0; i < positionCounters.length; i++) {
        if (i == 0) {
            if(positionCounters[i] > (diagnosticReport.length / 2)) {
                gammaRate = '1';
            } else {
                gammaRate = '0';
            }
        } else {
            if(positionCounters[i] > (diagnosticReport.length / 2)) {
                gammaRate = gammaRate + '1';
            } else {
                gammaRate = gammaRate + '0';
            }
        }
    }
}

function getEpsilonRate() {
    for (var i = 0; i < positionCounters.length; i++) {
        if (i == 0) {
            if(positionCounters[i] < (diagnosticReport.length / 2)) {
                epsilonRate = '1';
            } else {
                epsilonRate = '0';
            }
        } else {
            if(positionCounters[i] < (diagnosticReport.length / 2)) {
                epsilonRate = epsilonRate + '1';
            } else {
                epsilonRate = epsilonRate + '0';
            }
        }
    }
}

function getPowerConsumption(gammaRate, epsilonRate) {
    return powerConsumption = gammaRate * epsilonRate;
}

diagnosticReport.forEach(binaryNumber => {
    decodeNumber(binaryNumber);
});

getGammaRate();
getEpsilonRate();
getPowerConsumption(parseInt(gammaRate, 2), parseInt(epsilonRate, 2));

module.exports = {
    decodeNumber,
    getPowerConsumption
}