const fs = require('fs');

fs.readFile('./firstJson.json', 'utf8', (err, data) => {
    if (err) {
    console.error ('error loading JSON', err);
    return;
    }    

const firstJson = JSON.parse(data);


const splitSentence = (frase) => {     
    let divFrase = frase.split("");  
    let words = [];
    let currentWords = [];

    for (let index = 0; index < divFrase.length; index += 1) {
        if (divFrase[index] === " ") {
            words.push(currentWords.join(''));
            currentWords = [];
        } else {
            currentWords.push(divFrase[index])
        }
    }
    if (currentWords.length > 0) {
        words.push(currentWords.join(''));
    }
    return words
}



console.log(splitSentence(firstJson.set2.greet1));
console.log(splitSentence(firstJson.set2.greet2));
console.log(splitSentence(firstJson.set2.greet3));

});