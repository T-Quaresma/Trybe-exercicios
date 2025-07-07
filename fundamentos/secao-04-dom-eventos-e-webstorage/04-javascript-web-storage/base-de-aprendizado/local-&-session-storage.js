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

//----

// localStorage.setItem('filme', 'The Lion King');
// let recoveryLocalStorageString = localStorage.getItem('filme');
// console.log(recoveryLocalStorageString);
// console.log(typeof recoveryLocalStorageString);

// localStorage.setItem('number', 10);
// let recoveryLocalStorageNumber = JSON.parse(localStorage.getItem('number'));
// console.log(recoveryLocalStorageNumber);
// console.log(typeof recoveryLocalStorageNumber);

// const favoriteMovie = {
//     filme: 'Madagascar'
// }

// localStorage.setItem('object', JSON.stringify(favoriteMovie));
// let recoveryLocalStorageObject = JSON.parse(localStorage.getItem('object'));
// console.log(recoveryLocalStorageObject);
// console.log(typeof recoveryLocalStorageObject);

//---

// local storage

// Pega os elementos do HTML
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

// 📝 Insere a última frase na lista do DOM
const insertPhraseInDOM = () => {
  // Recupera a lista de frases do localStorage
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));

  // Pega o índice da última frase
  const listLength = phrasesList.length - 1;

  // Pega o texto da última frase
  const phraseText = phrasesList[listLength];

  // Cria um novo <li> e adiciona no <ul>
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

// ➕ Adiciona a frase ao localStorage
const addPhraseToLocalStorage = () => {
  // Recupera a lista atual do localStorage
  const oldList = JSON.parse(localStorage.getItem('phrases'));

  // Pega o texto digitado no input
  const phraseText = input.value;

  // Adiciona essa frase na lista
  oldList.push(phraseText);

  // Salva a lista de volta no localStorage
  localStorage.setItem('phrases', JSON.stringify(oldList));

  // Insere a nova frase no DOM (apenas a nova!)
  insertPhraseInDOM();

  // Limpa o input para digitar outra
  input.value = '';
};

// 🏁 Renderiza a lista toda quando a página carrega
const initialRendering = () => {
  // Se não existir lista no localStorage, cria uma lista vazia
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    // Se já existe, pega a lista
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));

    // Para cada frase, cria um <li> no DOM
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
};

// 🖱️ Quando clicar no botão, adiciona frase ao localStorage
button.addEventListener('click', addPhraseToLocalStorage);

// 🟢 Quando abrir a página, renderiza as frases salvas
window.onload = () => initialRendering();


// session storage

// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// const insertPhraseInDOM = () => {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// };

// const addPhraseToSessionStorage = () => {
//   if (sessionStorage.getItem('phrases') === null) {
//     sessionStorage.setItem('phrases', JSON.stringify([]));
//   }
//   const oldList = JSON.parse(sessionStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// };

// button.addEventListener('click', addPhraseToSessionStorage);



