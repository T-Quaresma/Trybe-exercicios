const fs = require("fs");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if(err){
        console.error("Error loading JSON", err);
    }

    const firstJson = JSON.parse(data);

    const triangleCheck = (lineA, lineB, lineC) => {
        checker = "";
        if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineC - lineA) && lineC < lineB + lineA && lineC > Math.abs(lineA - lineB)) {
            checker = true;
        } else {
            checker = false;
        }
        return checker
    }

    console.log(triangleCheck(firstJson.set12.triangle1.lineA, firstJson.set12.triangle1.lineB, firstJson.set12.triangle1.lineC));
    
})