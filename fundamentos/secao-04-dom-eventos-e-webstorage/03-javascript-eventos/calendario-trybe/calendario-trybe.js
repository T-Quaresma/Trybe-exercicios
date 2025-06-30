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