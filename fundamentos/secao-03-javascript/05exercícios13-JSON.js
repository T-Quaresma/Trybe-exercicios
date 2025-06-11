const fs = require("fs");
const { findSourceMap } = require("module");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if(err) {
        console.error("Error loading JSON", err);
    }

    const firstJson = JSON.parse(data);

    const hydrate = (string) => {
    let n = string.length
    let tilNow = 0
    for (index = 0; index < n; index += 1){
        if (string[index].charCodeAt(0) - "0".charCodeAt(0) >= 0 && string[index].charCodeAt(0) - "0".charCodeAt(0) <= 9) {
            tilNow = tilNow + Number(string[index]);
        }   
    }
    return (`${tilNow} copo(s) de água`)
}


console.log(hydrate(firstJson.set13.string1));
console.log(hydrate(firstJson.set13.string2));

})

