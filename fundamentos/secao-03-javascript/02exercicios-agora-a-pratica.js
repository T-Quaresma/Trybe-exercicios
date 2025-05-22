    //Percorra o array imprimindo todos os valores contidos nele com a função console.log().

    //Some todos os valores contidos no array e imprima o resultado.

    //Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

    //Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

    //Utilizando for, descubra o maior valor contido no array e imprima-o.

    //Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

console.log('Exercício01');
console.log('');
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



for (let index = 0; index < numbers.length; index += 1) {
    console.log(`${index} - ${numbers[index]}`);
}

console.log('');
console.log('Exercício02');
console.log('');

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];   
}

console.log(sum);


console.log('');
console.log('Exercício03');
console.log('');

let mediaAri = 0

for (let index = 0; index < numbers.length; index += 1) {
    mediaAri = mediaAri + numbers[index];
}

console.log(mediaAri / (numbers.length));

console.log('');
console.log('Exercício04');
console.log('');

if (mediaAri > 20) {
    console.log('O valor da média aritmética é maior que 20');   
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');    
}

console.log('');
console.log('Exercício05');
console.log('');

let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestValue) {
        highestValue = numbers[index];       
    }
}

console.log(highestValue);

console.log('');
console.log('Exercício06');
console.log('');

let numImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !==0) {
        numImpares = numImpares + 1;
    }
}

if (numImpares === 0) {
    console.log('Nenhum valor ímpar encontrado');   
} else {
    console.log(numImpares);   
}

console.log('');
console.log('Desafio Fatorial');
console.log('');

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial = fatorial * index;
}

console.log(fatorial);

console.log('');
console.log('Desafio de inverter palavra');
console.log('');

let word = 'tryber';
let letters = word.split('');
letters.reverse()
let reverseWord = letters.join('')


console.log(reverseWord);


console.log('');
console.log('Desafio dos asteriscos');
console.log('');

let n = 5;
let line = '';
console.log('n =', n);
console.log('');

for (let index = 0; index < n; index += 1) {
    for (let index = 0; index < n; index += 1) {
        line = line + "*";
    }
    console.log(line);  
    line = '';
}


console.log('');
console.log('Desafio da pirâmide de asteriscos');
console.log('');



console.log('n =', n);
console.log('');

for (let index = 0; index < n; index += 1) {  
    line = line + "*";
    console.log(line); 
}
line = '';

console.log('');
console.log('Desafio da pirâmide de asteriscos parte 2');
console.log('');

n = 5

console.log('n =', n);
console.log('');



for (let index = 0; index < n; index += 1) {
    line = '*'.repeat (n - index);  
    console.log(line);          
}    

console.log('');
console.log('Outro metodo');
console.log('');

line = ''

for (let index = 0; index < n; index += 1) {

    for (let indexline = 0; indexline < n - index; indexline += 1) {
        line = line + '*';  
              
    }  

    console.log(line);     
    line = ''
}

console.log('');
console.log('Desafio da pirâmide de asteriscos3');
console.log('');

n = 5;
line = '';

console.log('n =', n);
console.log('');

for (let index = 0; index < n; index += 1) {  
    line = line + "*";
    let space =' '.repeat (n - index - 1);
    
    console.log(space + line); 
}








