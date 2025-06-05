const fs = require('fs');

fs.readFile('./firstJson.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error loading JSON', err);
        return;
    }

const firstJson = JSON.parse(data);

function footballPoints (wins, ties) {
    let pointsQuant = ""
    const team = (wins * 3) + (ties * 1)
    pointsQuant = team
    return pointsQuant
}

console.log(footballPoints(firstJson.set4.team1.wins, firstJson.set4.team1.ties));
console.log(footballPoints(firstJson.set4.team2.wins, firstJson.set4.team2.ties));
console.log(footballPoints(firstJson.set4.team3.wins, firstJson.set4.team3.ties));


})
