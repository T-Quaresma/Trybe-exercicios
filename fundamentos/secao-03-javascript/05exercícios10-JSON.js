const fs = require("fs");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if (err){
        console.error("Error loading JSON", err);
        return
    }

    const firstJson = JSON.parse(data);

const fechList = (arrays, string) => {
    let newArray = []
    for (index = 0; index < arrays.length; index += 1) {
        newArray.push({tech: arrays[index], name: string });
    }
    return newArray
}

console.log(fechList(firstJson.set10.array, firstJson.set10.string));


})




