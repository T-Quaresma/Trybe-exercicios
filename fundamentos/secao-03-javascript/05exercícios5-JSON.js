const fs = require('fs');

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error loading JSON", err);
        return;
    }

const firstJson = JSON.parse(data);

const highestCount = (array) => {
    let highestValue = 0;
    for (index = 0; index < array.length; index += 1) {
        if (highestValue < array[index]) {
            highestValue = array [index];
        }
    }
    let count = 0;
    for (index = 0; index < array.length; index += 1) {
        if (highestValue === array[index]) {
            count = count + 1
        }
    }
    return count
}

console.log("O maior numero se repete", highestCount(firstJson.set5.array1), "vezes.");
console.log("O maior numero se repete", highestCount(firstJson.set5.array2), "vezes.");
console.log("O maior numero se repete", highestCount(firstJson.set5.array3), "vezes.");


})



