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