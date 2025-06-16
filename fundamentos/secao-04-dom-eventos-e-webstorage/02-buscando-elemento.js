// primeiro exercício

//console.log(document.getElementById('start').nextSibling);

//console.log(document.getElementById('start').nextElementSibling);


//segundo exercício
// Acesse o elemento where-are-you.
console.log(document.getElementById('where-are-you'));
// Acesse parent a partir de where-are-you e adicione uma color a ele.
console.log(document.getElementById('where-are-you').parentNode.style.color = 'rgb(0, 176, 105)');
// Acesse o first-child-of-child e adicione um texto a ele.
console.log(document.getElementById('first-child-of-child').textContent = "This is new text");
// Acesse o first-child a partir de parent.
console.log(document.getElementById('parent').children[0]);
// Acesse o first-child a partir de where-are-you.
console.log(document.getElementById('where-are-you').previousElementSibling);
// Acesse o texto Attention! a partir de where-are-you.
console.log(document.getElementById('where-are-you').nextSibling);
// Acesse o third-child a partir de where-are-you.
console.log(document.getElementById('where-are-you').nextElementSibling);
// Acesse o third-child a partir de parent.
console.log(document.getElementById('parent').children[2]);



