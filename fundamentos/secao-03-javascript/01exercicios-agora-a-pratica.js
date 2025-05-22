const num1 = 5;
const num2 = 10;
const num3 = 22;

//Exercício 1
console.log('');
console.log('exercício 1');
console.log('');
//adição
const som = num1 + num2;
console.log(som);
//subtração
const sub = num1 - num2;
console.log(sub);
//multiplicação
const mult = num1 * num2;
console.log(mult);
//divisão
const div = num1 / num2;
console.log(div);
//módulo
const mod = num1 % num2;
console.log(mod);

//exercício 2
console.log('');
console.log('Exercício2');
console.log('');

if (num1 > num2) {
    console.log('the highest number is', num1);
} else {
    console.log('the highest number is', num2);
}

//exercicio 3
console.log('');
console.log('Exercício3');
console.log('');

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num3) {
    console.log(num2);
} else if (num3 > num2) {
    console.log(num3);
} else {
    console.log('Numeros são iguais');
}

//exercicio 4
console.log('');
console.log('Exercício4');
console.log('');

let target = 180;
if (num1 + num2 + num3 === target) {
   console.log('true'); 
} else {
    console.log('false');
}

//exercicio 5
console.log('');
console.log('Exercício5');
console.log('');

let peca = 'bispo';

switch (peca) {
    case 'bispo':
        console.log('diagonais');
        break;
    case 'torre':
        console.log('linha reta');
        break;
    case 'rei':
        console.log('uma casa em linha reta');
        break;
    case 'rainha':
        console.log('linha reta e diagonais');
        break;
    case 'cavalo':
        console.log('movimento em L');
        break;
    case 'peão':
        console.log('uma casa a frente, duas casas no primeiro movimento');
        break;
    default:
        console.log('erro: peça invalida')
}

//exercício 6
console.log('');
console.log('Exercício6');
console.log('');

if (num1 % 0 || num2 % 0 || num3 % 0) {
    console.log('True')
} else {
    console.log('False')
}

//exercício 7
console.log('');
console.log('Exercício7');
console.log('');

let salbruto = 3000;
let salPosINSS = '';
let salPosIR = '';
const inssMaxPercnt = 570.88




if (salbruto <= 1556.94) {
    salPosINSS = salbruto - (salbruto * 8) / 100;
    console.log(salPosINSS);
} else if (salbruto >= 1556.95 && salbruto <= 2594.92) {
    salPosINSS = salbruto - (salbruto * 9) / 100;
    console.log(salPosINSS);
} else if (salbruto >= 2594.93 && salbruto <= 5189.82) {
    salPosINSS = salbruto - (salbruto * 11) / 100;
    console.log(salPosINSS);
} else if (salbruto > 5184.82) {
    salPosINSS = salbruto - inssMaxPercnt;
    console.log(salPosINSS);
}

if (salPosINSS <= 1903.98) {
    salPosIR = salPosINSS - 0
    console.log(salPosIR);
} else if (salPosINSS >= 1903.99 && salPosINSS <= 2826.65) {
    salPosIR = salPosINSS - ((salPosINSS * 7.5) / 100 - 142.80);
    console.log(salPosIR);
} else if (salPosINSS >= 2826.66 && salPosINSS <= 3751.05) {
    salPosIR = salPosINSS - ((salPosINSS * 15) / 100 - 354.80);
    console.log(salPosIR);
} else if (salPosINSS >= 3761.06 && salPosINSS <= 4664.68) {
    salPosIR = salPosINSS - ((salPosINSS * 22.5) / 100 - 636.13);
    console.log(salPosIR);
} else if (salPosINSS > 4664.68) {
    salPosIR = salPosINSS - ((salPosINSS * 27.5) / 100 - 869.36);
    console.log(salPosIR);
}

