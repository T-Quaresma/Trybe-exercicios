console.log('');

console.log('ex1');

console.log('');

const fs = require('fs');

fs.readFile('./05animals.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error loading JSON:', err);
    return;
  }

const animals = JSON.parse(data);

const compareTrue = (value1, value2) => {
    if (value1 === true && value2 === true) {
        return true
    } else {
        return false
    }
}


    console.log(compareTrue(animals.girafa, animals.elefante));

});



