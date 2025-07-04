// exemplo de utilização:

//  sessionStorage - salva os dados apenas para a sessão atual, ou seja, eles são removidos assim que a pessoa fecha
//  a aba (tab) ou o navegador (browser). 

// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
// console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
// console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
// localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
// console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
// localStorage.clear(); // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

// exemplo com sessionStorage:

// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
// sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
// console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
// console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
// sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
// console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
// sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
// console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

localStorage.setItem('filme', 'The Lion King');
let recoveryLocalStorageString = localStorage.getItem('filme');
console.log(recoveryLocalStorageString);
console.log(typeof recoveryLocalStorageString);

//--- 

localStorage.setItem('number', 10);
let recoveryLocalStorageNumber = JSON.parse(localStorage.getItem('number'));
console.log(recoveryLocalStorageNumber);
console.log(typeof recoveryLocalStorageNumber);

//---

const favoriteMovie = {
    filme: 'Madagascar'
}

localStorage.setItem('object', JSON.stringify(favoriteMovie));
let recoveryLocalStorageObject = JSON.parse(localStorage.getItem('object'));
console.log(recoveryLocalStorageObject);
console.log(typeof recoveryLocalStorageObject);



