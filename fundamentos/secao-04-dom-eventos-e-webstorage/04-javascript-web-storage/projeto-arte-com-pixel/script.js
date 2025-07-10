// Quando clicar no botão, gerar cores aleatórias para os blocos sem afetar a cor do bloco preto e salvar combinação de cores no localStorage.

const buttonColorSwap = document.getElementById('button-random-color');

const colorRandomizer = () => {
    const selectedBlocks = document.getElementsByClassName('color');
    let colorPallete = ['#FF0000', '#0055FF', '#804000', '#FFE0A0', '#FFD800'];
    let shuffledColors = colorPallete.sort(() => Math.random() - 0.5);
    colorIndex = 0;
    storedColors = [];
    for(index = 0; index < selectedBlocks.length; index += 1) {
        if(!selectedBlocks[index].classList.contains('black')) {
            selectedBlocks[index].style.backgroundColor = shuffledColors[colorIndex];
            storedColors.push(shuffledColors[colorIndex])
            colorIndex = colorIndex + 1;    
        }    
    }
    localStorage.setItem('colorPlacements', JSON.stringify(storedColors));
}

buttonColorSwap.addEventListener('click', colorRandomizer);

// Manter as cores salvas em localStorage após recarregar a página.

const savedColors = (value) => {
    const getBlocks = document.getElementsByClassName('color');
    indexColor = 0;
    if(value){
        for(index = 0; index < getBlocks.length; index += 1) {
            if(!getBlocks[index].classList.contains('black')) {
                getBlocks[index].style.backgroundColor = value[indexColor];
                indexColor = indexColor + 1;
            }
        }
    }
}
const colorOrderUser = JSON.parse(localStorage.getItem('colorPlacements'));
if(colorOrderUser) {
    savedColors(colorOrderUser)
}

// gerar blocos de pixel para o painel.

const blockRepetition = document.getElementsByClassName('pixel');
for(index = 0; index < 24; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    document.getElementById('pixel-board').appendChild(pixel);    
}

// selecionar qual cor vai ter a classe "selected" para pintar dentro do pixel.

const colors = document.getElementsByClassName('color')
const selectColor = (event) => {
    const colorSelected = document.querySelector('.selected');
    if(!event.target.classList.contains('selected'))
        colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
}
for(index = 0; index < colors.length; index += 1){
colors[index].addEventListener('click', selectColor)
}