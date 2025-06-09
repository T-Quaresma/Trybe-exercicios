const fs = require("fs");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error loading JSON", data);
        return
    }
    const firstJson = JSON.parse(data);

    const fizzBuzz = (array) => {
        for (let index = 0; index < array.length; index += 1) {
            if (array[index] % 3 === 0 && array[index] % 5 !== 0){
                array[index] = "fizz";
            } else if (array[index] % 5 === 0 && array[index] % 3 !== 0){
                array[index] = "buzz"
            } else if (array[index] % 5 === 0 && array[index] % 3 === 0) {
                array[index] = "fizzBuzz"
            } else if (array[index] % 5 !== 0 && array[index] % 3 !== 0) {
                array[index] = "bug!"
            }
        }
        return array
    };

    console.log(fizzBuzz(firstJson.set8.array));
    
});