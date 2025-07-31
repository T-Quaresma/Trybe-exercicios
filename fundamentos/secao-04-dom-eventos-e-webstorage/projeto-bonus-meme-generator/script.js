// 1
const inputValueButton = document.querySelector("#text-input");
const inputButton = () => {
    const text = document.querySelector("#text-input").value;
    if(text.length > 10) {
        inputValueButton.value = inputValueButton.value.substring(0, 10);
        alert('maximo de 10 caracteres')   
    } else {
        const squareText = document.querySelector("#meme-text");
        squareText.innerText = text;
    }  
}

inputValueButton.addEventListener('input', inputButton)

// 2
// selecionar elementos html
const imagePreview = document.querySelector("#meme-insert");
const fileSelection = document.querySelector("#file-selection");
const hiddenInput = document.querySelector("#img-input");
// adiciona um listener para selecionar o file que o hiddenInput está segurando
hiddenInput.addEventListener('change', (event) => {
// acesa o primeiro arquivo selecionado no <input type="file">
const file = event.target.files[0];
// Se o arquivo for selecionado, execute:
if(file) {
    // cria um leitor de arquivos do comutador do usuario, para ler o arquivo que ja foi selecionado
    const leitor = new FileReader();
    // Quando o leitor terminar de carregar o arquivo:
    leitor.addEventListener("load", function () {
        // pega a imagem selecionada e ja lido  em formato Data URL e joga no src da imagem
        imagePreview.setAttribute('src', this.result);
        // transforma o display da imagem em block e exibe a imagem
        imagePreview.style.display = 'block';      
        
        imagePreview.onload = function () {
            const largura = imagePreview.naturalWidth;
            const altura = imagePreview.naturalHeight;

            const container = document.querySelector("#meme-image-container");
            container.style.width = `${largura}px`;
            container.style.height = `${altura}px`;
        }
    });
    // diz ao leitor "leia este arquivo e transforme em uma URL de imagem"
    leitor.readAsDataURL(file);
}
})
// ja que hiddenInput é um input com type "file" só de adicionar o .click ele ja abre explorador de arquivos
fileSelection.addEventListener('click', () => {hiddenInput.click()});

//bonus

const changeColorRed = document.querySelector("#fire");
const borderColorRed = () => {
    const borderTarget = document.querySelector("#meme-image-container");
    borderTarget.style.border = '2px solid #ff0000';
}

changeColorRed.addEventListener('click', borderColorRed);

const changeColorBlue = document.querySelector("#water");
const borderColorBlue = () => {
    const borderTarget = document.querySelector("#meme-image-container");
    borderTarget.style.border = "2px solid #4d67f9";
}

changeColorBlue.addEventListener("click", borderColorBlue);

const changeColorBrown = document.querySelector("#earth");
const borderColorBrown = () => {
    const borderTarget = document.querySelector("#meme-image-container");
    borderTarget.style.border = "2px solid #a52a2a";
}

changeColorBrown.addEventListener("click", borderColorBrown);





