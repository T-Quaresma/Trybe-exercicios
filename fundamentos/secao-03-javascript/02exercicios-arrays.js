// push() --  	Adiciona um elemento ao final do array 
//shoppingList.push('Cotonetes');

// unshift() -- Adiciona um elemento no início do array 
//shoppingList.unshift('Água de Coco');

// pop() -- Remove o último elemento do array 
//shoppingList.pop();

// shift() -- Remove o primeiro elemento do array 
//shoppingList.shift();


//------------------

// exemplo de array

//const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];


//------------------


//Tamanho do array

//console.log(shoppingList); // Saída: ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos']

//console.log(shoppingList.length); // Saída: 4


// estrutura de repetição (for)

//const laps = 68;

//for (let index = 1; index <= laps; index += 1) {
 // console.log(`Volta ${index} completada!`);
//}

//console.log('Acabou a corrida!');

//--------------

//Exemplo prático: somando todos os elementos de um array de números

// Array de números
//const numbers = [2, 19, 23, 4, 8, 10];

// Variável complementar que irá acumular os valores da somados
//let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
//for (let index = 0; index < numbers.length; index += 1) {
//  sum += numbers[index];
//};

//console.log(sum);

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(`${index} - ${groceryList[index]}`);
}