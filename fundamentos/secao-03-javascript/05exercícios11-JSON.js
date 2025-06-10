const fs = require("fs");

fs.readFile("./firstJson.json", "utf8", (err, data) => {
    if(err) {
        console.error("Error loading JSON", err);
        return
    }
    const firstJson = JSON.parse(data);

    const generatePhoneNumber = (array) => {
        let number = "";
        let total = array.length;
        const count = {}
        for (index = 0; index < array.length; index += 1) {
            if(index === 0){
            number = number + "(" + array[index];
            } else if (index === 1) {
                number = number + array[index] + ")" + " ";
            } else {
                number = number + array[index];
            }
        }
    for (let index = 0; index < array.length; index += 1) {
        const num = array[index];
         if (array[index] < 0) {
                return "não foi possivel gerar um número de telefone com esses valores"
            } else if (total !== 11) {
                return "Array com tamanho incorreto"
            } else if (array[index] > 9) {
                return "não é possivel gerar um número de telefone com esses valores"
            } else if (count[num]) {
                count[num] = count[num] + 1
            } else if (!count[num]) {
                count[num] = 1;
            }
        if (count[num] >= 3) {
            return "não é possivel gerar um número de telefone com esses valores cara!"
        }
    }
    
        return number
    }

    console.log(generatePhoneNumber(firstJson.set11.array1));
    console.log(generatePhoneNumber(firstJson.set11.array2));
    console.log(generatePhoneNumber(firstJson.set11.array3));
    console.log(generatePhoneNumber(firstJson.set11.array4));
    console.log(generatePhoneNumber(firstJson.set11.array5));
})


