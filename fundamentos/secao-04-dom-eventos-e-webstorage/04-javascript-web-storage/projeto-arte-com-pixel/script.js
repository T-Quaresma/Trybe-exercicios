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

// adicionando o butão para que gere o valor adicionado no input + recriando o evento de pintar os pixels nos novos pixels criados + salvar no localStorage

const newSquareSize = () => {
    const inputValue = document.getElementById('board-size').value;
    if(inputValue >= 5 && inputValue <= 50){
        if(inputValue >= 20) {
            const size = Number(inputValue);
            const totalPixels = size * size;
            const pixelSize = "18px" 
            const pixelBoard = document.getElementById('pixel-board');
            pixelBoard.innerHTML = '';
            pixelBoard.style.gridTemplateColumns = `repeat(${size}, ${pixelSize})`;
            for(let index = 0; index < totalPixels; index += 1) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.height = '18px';
                pixel.style.width = '18px'
                pixelBoard.appendChild(pixel);    
            }
            //ao criar os pixels (divs) ativar a função de pintar os pixels que forem clicados
            adicinarEventosNosPixels()
        } else {
            const size = Number(inputValue);
            const totalPixels = size * size;
            const pixelSize = "40px"
            const pixelBoard = document.getElementById('pixel-board');
            pixelBoard.innerHTML = '';
            pixelBoard.style.gridTemplateColumns = `repeat(${size}, ${pixelSize})`;
            for(let index = 0; index < totalPixels; index += 1) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.height = '40px';
                pixel.style.width = '40px'
                pixelBoard.appendChild(pixel);   
            }
            //ao criar os pixels (divs) ativar a função de pintar os pixels que forem clicados
            adicinarEventosNosPixels()
        }
    } else {
        alert('Somente valores de 5 a 50')
    }
    localStorage.setItem('boardSize', JSON.stringify(inputValue))
}

const boardSizeButton = document.querySelector('#generate-board')
boardSizeButton.addEventListener('click', newSquareSize)

// pegando os valores do localStorage e aplicando na criação da caixa de pixels

const readSavedPixels = JSON.parse(localStorage.getItem("boardSize"));
if(readSavedPixels) {
    const pixelSize = readSavedPixels >= 20 ? 18 : 40;
    const totalPixels = readSavedPixels * readSavedPixels;
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    pixelBoard.style.gridTemplateColumns = `repeat(${readSavedPixels}, ${pixelSize}px)`;
    for(let index = 0; index < totalPixels; index += 1) {
        const pixel = document.createElement('div')
        pixel.className = 'pixel';
        pixel.style.height = `${pixelSize}px`;
        pixel.style.width = `${pixelSize}px`;
        pixelBoard.appendChild(pixel);
    }
}

const adicinarEventosNosPixels = () => {
   const pixelSelection = document.querySelectorAll('.pixel');
    for(index = 0; index < pixelSelection.length; index += 1) {
        pixelSelection[index].addEventListener('click', pixelColoring);
    } 
}

// criar uma função que preencha um pixel com a cor selecionada.

const pixelColoring = (event) => {
    const colorSelected = document.querySelector('.selected');
    const bgColor = getComputedStyle(colorSelected).backgroundColor;
    let storedColors = [];
    if(colorSelected.classList.contains('selected')) {
        event.target.style.backgroundColor = bgColor   
    } 
    const allPixels = document.querySelectorAll(".pixel");
    for(index = 0; index < allPixels.length; index += 1) {
        storedColors.push(allPixels[index].style.backgroundColor)
    }
    localStorage.setItem('pixelBoard', JSON.stringify(storedColors));      
}

const pixelSelection = document.querySelectorAll('.pixel');

for(index = 0; index < pixelSelection.length; index += 1) {
    pixelSelection[index].addEventListener('click', pixelColoring);
}

// criar butão para limpar a janela de pixels

const clearPixelButton = document.querySelector('#clear-board');

const clearBoard = () => {
    let board = document.querySelectorAll('.pixel');
    let resetColor = '#ffffffff'
    let newColors = []
    for(index = 0; index < board.length; index += 1) {
        board[index].style.backgroundColor = resetColor
        newColors.push(resetColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(newColors))
}

clearPixelButton.addEventListener('click', clearBoard);

// adicionar combinação de cores nos pixels atuais no localStorage
pixelColorSelection = document.querySelectorAll('.pixel')

const readSavedColors = JSON.parse(localStorage.getItem("pixelBoard"));
for(index = 0; index < pixelColorSelection.length; index += 1) {
    pixelColorSelection[index].style.backgroundColor = readSavedColors[index]
}



