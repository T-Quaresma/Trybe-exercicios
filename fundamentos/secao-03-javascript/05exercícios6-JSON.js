const fs = require('fs');

fs.readFile('./firstJson.json', "Utf8", (err, data) => {
    if (err) {
        console.error('Error loading JSON', data);
        return;
    }
 
const firstJson = JSON.parse(data);

const calcTriangleArea = (base, height) => {
    let areaTri = (base * height) / 2;
    return areaTri;
}

const calcRectangleArea = (base, height) => {
    let areaRect = base * height;
    return areaRect;
}

const calcAllAreas = (base, height, form) => {
    if(form === "triangle") {
        let message = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
        return message;
    } else if (form === "rectangle") {
        let message = `O valor da área do retangulo é de ${calcRectangleArea(base, height)}`;
        return message;
    } else {
        let message = `Não foi possivel fazer o cálculo, insira uma forma geométrica válida`;
        return message;
    }
}

console.log(calcAllAreas(firstJson.set6.rectangle.base, firstJson.set6.rectangle.height, "quadrado"));
console.log("");
console.log(calcAllAreas(firstJson.set6.triangle.base, firstJson.set6.triangle.height, "triangle"));
console.log("");
console.log(calcAllAreas(firstJson.set6.rectangle.base, firstJson.set6.rectangle.height, "rectangle"));







})