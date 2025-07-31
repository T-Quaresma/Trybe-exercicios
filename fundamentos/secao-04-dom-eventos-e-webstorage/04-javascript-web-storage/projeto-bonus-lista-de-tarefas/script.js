
const addingListButton = document.getElementById('criar-tarefa');

const addingList = () => {
    const father = document.querySelector("#Lista-tarefas");
    const input = document.querySelector('#texto-tarefa');
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    newItem.classList.add('list');
    father.appendChild(newItem)
    input.value = "";
}

addingListButton.addEventListener('click', addingList)

const selectingList = document.querySelector('#Lista-tarefas');


const coloringLi = (event) => {
    let bgColor = "gray";
    const selectedList = document.querySelector('.selected');
    if(selectedList){
        selectedList.style.backgroundColor = '';
        selectedList.classList.remove('selected');
    }
    event.target.style.backgroundColor = bgColor;
    event.target.classList.add('selected'); 
}

const listCrossing = (event) => {
    if(event.target.classList.contains('crossed')) {
        event.target.classList.remove('crossed');   
    } else {
        event.target.classList.add('crossed');
    }   
}

const removeListButton = document.querySelector('#apaga-tudo')

const removingList = () => {
    const list = document.querySelectorAll('.list');
    for(index = 0; index < list.length; index += 1) {
        list[index].remove('li');
    }
}

const moveUpListButton = document.querySelector("#mover-cima");

const upPositionList = () => {
    const list = document.querySelectorAll('.list');
    const parent = document.querySelector("#Lista-tarefas")
    for(let index = 0; index < list.length; index += 1) {
        if(list[index].classList.contains('selected') && index !== 0) {
            parent.insertBefore(list[index], list[index - 1])
        }
    }
}

const moveDownListButton = document.querySelector("#mover-baixo");

const downPositionList = () => {
    const list = document.querySelectorAll('.list');
    const parent = document.querySelector("#Lista-tarefas");
    for(let index = 0; index < list.length; index += 1) {
        if(list[index].classList.contains('selected') && index !== list.length - 1) {
            parent.insertBefore(list[index], list[index + 2]);
        }
    }   
}

const removeSelectedButton = document.querySelector("#remover-selecionado");

const removeSelected = () => {
    const list = document.querySelectorAll('.list');
    for(let index = 0; index < list.length; index += 1) {
        if(list[index].classList.contains('selected')) {
            list[index].remove('li');
        }
    }
}

selectingList.addEventListener('click', coloringLi);

selectingList.addEventListener('dblclick', listCrossing);

removeListButton.addEventListener('click', removingList);

moveUpListButton.addEventListener('click', upPositionList);

moveDownListButton.addEventListener('click', downPositionList);

removeSelectedButton.addEventListener('click', removeSelected);