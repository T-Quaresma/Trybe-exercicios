const fs = require("fs");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error loading JSON", data);
        return
    }
    const firstJson = JSON.parse(data);

    const encode = (frase) => {
        let newFrase = ""
        for (index = 0; index < frase.length; index += 1) {
            if (frase[index] === "a") {
                newFrase = newFrase + "1";
            } else if (frase[index] === "e") {
                newFrase = newFrase + "2";
            } else if (frase[index] === "i") {
                newFrase = newFrase + "3";
            } else if (frase[index] === "o") {
                newFrase = newFrase + '4';
            } else if (frase[index] === "u") {
                newFrase = newFrase + '5';
            } else {
                newFrase = newFrase + frase[index];
            }
         }
        return newFrase
    }

    console.log(encode(firstJson.set9.param1));
    console.log(encode(firstJson.set9.param2));
    console.log(encode(firstJson.set9.param3));
    console.log(encode(firstJson.set9.param4));
    console.log(encode(firstJson.set9.param5));
    
    
})