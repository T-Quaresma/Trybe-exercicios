let irmao = document.createElement('section');

irmao.id = "irmao";

parent = document.getElementById("pai");

parent.appendChild(irmao);

console.log("irmao criado", irmao);

let filhoOndeVoceEsta = document.createElement("section");

filhoOndeVoceEsta.id = "filho de ElementoOndeVoceEsta";

parent1 = document.getElementById("elementoOndeVoceEsta");

parent1.appendChild(filhoOndeVoceEsta);

console.log("FilhoOndeVoceEsta criado", filhoOndeVoceEsta);

let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');

filhoDoPrimeiroFilhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";

parent2 = document.getElementById("primeiroFilhoDoFilho");

parent2.appendChild(filhoDoPrimeiroFilhoDoFilho);

console.log("filhoDoPrimeiroFilhoDoFilho criado", filhoDoPrimeiroFilhoDoFilho);

let irmao1 = document.getElementById("filhoDoPrimeiroFilhoDoFilho");

pai = irmao1.parentElement.parentElement;

let terceiroFilho = pai.nextElementSibling;

console.log(terceiroFilho);


// removendo elementos do html

parent.removeChild(irmao)