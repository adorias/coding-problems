module.exports = {
    processADay
}

let inputs = [4,1,1,1,5,1,3,1,5,3,4,3,3,1,3,3,1,5,3,2,4,4,3,4,1,4,2,2,1,3,5,1,1,3,2,5,1,1,4,2,5,4,3,2,5,3,3,4,5,4,3,5,4,2,5,5,2,2,2,3,5,5,4,2,1,1,5,1,4,3,2,2,1,2,1,5,3,3,3,5,1,5,4,2,2,2,1,4,2,5,2,3,3,2,3,4,4,1,4,4,3,1,1,1,1,1,4,4,5,4,2,5,1,5,4,4,5,2,3,5,4,1,4,5,2,1,1,2,5,4,5,5,1,1,1,1,1,4,5,3,1,3,4,3,3,1,5,4,2,1,4,4,4,1,1,3,1,3,5,3,1,4,5,3,5,1,1,2,2,4,4,1,4,1,3,1,1,3,1,3,3,5,4,2,1,1,2,1,2,3,3,5,4,1,1,2,1,2,5,3,1,5,4,3,1,5,2,3,4,4,3,1,1,1,2,1,1,2,1,5,4,2,2,1,4,3,1,1,1,1,3,1,5,2,4,1,3,2,3,4,3,4,2,1,2,1,2,4,2,1,5,2,2,5,5,1,1,2,3,1,1,1,3,5,1,3,5,1,3,3,2,4,5,5,3,1,4,1,5,2,4,5,5,5,2,4,2,2,5,2,4,1,3,2,1,1,4,4,1,5];

let fishMap = new Map();

inputs.forEach(element => {
    if(fishMap.has(element)) {
        fishMap.set(element, fishMap.get(element) + 1);
    } else {
        fishMap.set(element, 1);
    }
})

function processADay(fishMap) {
    let tempMap = new Map();
    
    for(let i = 0; i <= 8; i++) {
        if(fishMap.has(i)) {
            tempMap.set((i - 1), fishMap.get(i));
        }
    }

    if(tempMap.has(-1)) {
        if(tempMap.has(6)) {
            tempMap.set(6, tempMap.get(6) + tempMap.get(-1));
        } else {
            tempMap.set(6, tempMap.get(-1));
        }
        tempMap.set(8, tempMap.get(-1));
        tempMap.delete(-1);
    }

    return tempMap;
}

for(let i = 0; i < 256; i++) {
    fishMap = processADay(fishMap);
}

console.log(fishMap);

let count = 0;
for(let i = 0; i <= 8; i++) {
    count += fishMap.get(i);
}

console.log(count);
