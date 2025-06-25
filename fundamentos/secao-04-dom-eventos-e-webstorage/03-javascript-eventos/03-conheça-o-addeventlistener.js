const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.

//ex 2/2.1
const tech = (event) => {
    let techClass =  document.querySelector('.tech');
    techClass.classList.remove('tech');
    event.target.classList.add('tech');
    console.log('ex1 added tech to', event.target);
    input.value = '';
}
listItems = document.querySelectorAll('li');
for(let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', tech);
}

//ex 3

const changeText = (event) => {
    if(event.key === "Enter") {
        let newText = document.querySelector('.tech');        
        newText.innerText = event.target.value;
        console.log('ex2 added new inner text to target', event.target);
        event.target.value = '';
    }
}
input.addEventListener('keydown', changeText);

//ex 4

const spotrybefy = () => {
    window.location.href = 'https://steamcharts.com/app/2767030';
}

myWebpage.addEventListener('dblclick', spotrybefy);

//ex 5

const textColorChange = (event) => {
    colorChange = document.querySelector('h3');
    if(event.type === 'mouseover') {
    colorChange.style.color = '#50ff00'
    } else if (event.type === 'mouseout') {
        colorChange.style.color = '';
    }
}

myWebpage.addEventListener('mouseover', textColorChange);
myWebpage.addEventListener('mouseout', textColorChange);





