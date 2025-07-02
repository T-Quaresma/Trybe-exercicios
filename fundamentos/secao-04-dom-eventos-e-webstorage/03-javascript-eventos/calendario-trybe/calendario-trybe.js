// ex 1

const decemberMonth = document.createElement('ul');
decemberMonth.id = 'days';
document.body.appendChild(decemberMonth);

const dezDaysList = [29, 30, 1, 2, 3, 4, 5,
                     6, 7, 8, 9, 10, 11, 12,
                     13, 14, 15, 16, 17, 18, 19,
                     20, 21, 22, 23, 24, 25, 26,
                     27, 28, 29, 30, 31];
const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];

for(index = 0; index < dezDaysList.length; index += 1) {
    const daysList = document.createElement('li');
    daysList.classList = 'day';
    daysList.innerText = dezDaysList[index];
    
    if (holiday.includes(Number(daysList.innerText))) {
        daysList.classList.add('holiday');
    }
    if(friday.includes(Number(daysList.innerText))){
        daysList.classList.add('friday');
    }

    decemberMonth.appendChild(daysList);
}

// ex 2


const changeBgColor = () => {
    const color = document.getElementsByClassName('holiday');
for(index = 0; index < color.length; index += 1){
    if(color[index].style.backgroundColor === 'blue') {
        color[index].style.backgroundColor = 'lightgreen';
    } else {
        color[index].style.backgroundColor = 'blue'; 
    }
}}


const feriados = document.getElementsByClassName('holiday');
for(index = 0; index < feriados.length; index += 1) {
feriados[index].addEventListener('click', changeBgColor);
}


// ex 3


const changeText = () => {
    const cText = document.getElementsByClassName('friday');
    for(index = 0; index < cText.length; index += 1) {
        if(cText[index].innerText === 'sexta') {
            cText[index].innerText = friday[index];
        } else {
            cText[index].innerText = "sexta";
        }
    }    
}

const fridayText = document.getElementsByClassName('friday');
for(index = 0; index < fridayText.length; index += 1) {
fridayText[index].addEventListener('click', changeText);
}

// ex 4

const zoom = (event) => {
    const zoomDayTarget = event.target;
    if(zoomDayTarget.style.fontSize !== '30px') {
        zoomDayTarget.style.fontSize = '30px';
    } else {
        zoomDayTarget.style.fontSize = '';
    }
}

const zoomText = document.getElementsByClassName('day');
for(index = 0; index < zoomText.length; index += 1) {
    zoomText[index].addEventListener('mouseover', zoom);
    zoomText[index].addEventListener('mouseout', zoom);
}

// ex 5 

const divMain = document.createElement('div');
divMain.className = 'my-tasks';
document.body.appendChild(divMain);

const span = document.createElement('span');
span.innerText = 'Selection';
divMain.appendChild(span);

const divCor = document.createElement('div');
divCor.className = 'task-color';
divMain.appendChild(divCor);

const actionSelection = (event) => {
    const taskSelection = event.target;   
    taskSelection.classList.toggle('selected');  
    const taskselctionOn = document.querySelector('.task-color.selected');
    if(taskselctionOn) {
        taskselctionOn.style.backgroundColor = 'green';
    } else {
        taskSelection.style.backgroundColor = '';
    }
}

divCor.addEventListener('click', actionSelection);

// ex 6

const actionColor = (event) => {
    const taskColor = document.querySelector('.task-color.selected');
    if(taskColor) {
        if(event.target.style.backgroundColor !== "green") {
            event.target.style.backgroundColor = 'green';
        }else {
            event.target.style.backgroundColor = '';
        }
    }
}

const taskColor = document.getElementsByClassName('day');
for (let index = 0; index < taskColor.length; index += 1) {
  taskColor[index].addEventListener('click', actionColor);
}

// ex 7 

const container = document.createElement('div');
document.body.appendChild(container);

const caixaDeTexto = document.createElement('input');
caixaDeTexto.type = 'text';
caixaDeTexto.placeholder = 'Escreva seu compromisso aqui';
caixaDeTexto.id = 'task-input';
container.appendChild(caixaDeTexto);

const cdtButton = document.createElement('button');
cdtButton.id = 'btn-add';
cdtButton.innerText = 'Adicionar'
container.appendChild(cdtButton);

const inputText = () => {
    const inpText = document.getElementById('task-input').value;
    if(inpText !== "") {
        const newText = document.createElement('li');
        newText.innerText = inpText;
        decemberMonth.appendChild(newText);
        document.getElementById('task-input');value = '';
    }
}

cdtButton.addEventListener('click', inputText);

caixaDeTexto.addEventListener('keyup', (event) => {
    if( event.key === "Enter") {
        inputText();
    }
})


































