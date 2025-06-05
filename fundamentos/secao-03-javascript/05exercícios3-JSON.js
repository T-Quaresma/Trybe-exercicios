const fs = require('fs');

fs.readFile ('./firstJson.json', 'utf8', (err, data) => {
    if (err) {
        console.error ('Error loading JSON', err);
        return;
    }

const firstJson = JSON.parse(data);

const concatName = (object) => {
    let firstLast = [];
    if (object.length >= 1){
        firstLast.push(object[0]);
    } 
     if (object.length >= 2) {
        firstLast.push(object[object.length - 1]);
    }
    // outra forma de chegar ao resultado
    //for (index = 0; index < object.length + 1; index += 1) {
        //if (index === 0) {
            //firstLast.push(object[index]);
        //} else if (object[index] === undefined) {
           // firstLast.push(object[object.length - 1])
        //}
    //}
    return firstLast
}
console.log(concatName(firstJson.set3.array1));
console.log(concatName(firstJson.set3.array2));
console.log(concatName(firstJson.set3.array3));



})


