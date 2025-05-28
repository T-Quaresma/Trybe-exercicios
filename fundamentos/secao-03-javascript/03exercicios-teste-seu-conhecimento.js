console.log('');
console.log('Exercício 1');
console.log('');

const palavras = ['feijão', 'batata', 'arara', 'clara', 'radar', 'peixe', 'osso', 'laranja', 'reviver'];
let invertido = [];

function pali (palavra) {
    for (index = 0; index < palavra.length; index += 1){        
        let palavrainv = palavra[index].split('').reverse().join('');       
        if (palavra[index] === palavrainv) {
            invertido.push(palavra[index]);        
        }
    }     
    return invertido; 
}
console.log(pali(palavras));  

console.log('');
console.log('Exercício 2');
console.log('');


const numeros = [2, 5, 3, 9, 1];

function hIndex (iNumber) {
    let placeHolder = 0
    for (index = 0; index < iNumber.length; index += 1){
        if (placeHolder < iNumber[index]){
            placeHolder = index;
        }
    }
    return placeHolder;
}
console.log(hIndex(numeros));

console.log('');
console.log('Exercício 3');
console.log('');

function lIndex (iNumber) {
    let placeHolder = 0
    for (index = 0; index < iNumber.length; index += 1){
        if (iNumber[placeHolder] > iNumber[index]){
            placeHolder = index;
        }
    }
    return placeHolder;
}
console.log(lIndex(numeros));

console.log('');
console.log('Exercício 4');
console.log('');

const words = ['apple', 'pineapple', 'garlics', 'pine', 'grape'];

function sWord (wNumber) {
    let bSize = 0;
    let bWord
    for (index = 0; index < wNumber.length; index += 1) {
        if (wNumber[index].length > bSize) {
            bSize = wNumber[index].length;
            bWord = wNumber[index];    
        }
    }
    return bWord;
}
console.log(sWord(words));


console.log('');
console.log('Exercício 5');
console.log('');

const numbers = [7, 3, 7, 2, 4, 3, 7, 1, 2, 7];

let repNumber = 0;
const contagems = {};
let mostFrequent = '';
let number = 0;

function rNumber (repet) {
    for (index = 0; index < repet.length; index += 1) {
      number = repet[index];   
      if (undefined === contagems[number]) {
        contagems[number] = 1;
        } else {
            contagems[number] += 1;
        }
    }   
    for (let number in contagems) {
        if (contagems[number] > repNumber) {
            repNumber = contagems[number];
            mostFrequent = Number(number);
        }
    }
    return mostFrequent
}


console.log(rNumber(numbers));


console.log('');
console.log('Exercício 6');
console.log('');

const valor = 15;

function somaV (soma){
    let total = 0
for (index = 0; index <= soma; index += 1){
    total = total + index;
}
return total;
}

console.log(somaV(valor));


console.log('');
console.log('Exercício 7');
console.log('');

let banana = 'banana'
let refri = 'refri'
let nomes = 'fernana'
function final(ending, target){
    let result = '';
    if (ending.endsWith(target)){
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log('reference (banana)');
console.log('');
console.log('refri');
console.log(final(refri, 'ana'));
console.log('');
console.log('fernana');
console.log(final(nomes, 'ana'));
