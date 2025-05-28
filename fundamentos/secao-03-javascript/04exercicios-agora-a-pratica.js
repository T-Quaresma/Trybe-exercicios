console.log('');
console.log('Exercício 1');
console.log('');

const reader = {

  name: 'Julia',

  lastName: 'Pessoa',

  age: 21,

  favoriteBooks: [

    {

      title: 'O Senhor dos Anéis - a Sociedade do Anel',

      author: 'J. R. R. Tolkien',

      publisher: 'Martins Fontes',

    },

  ],

};

const addToFavoriteBooks = (person, newbook) => {
    if (Array.isArray(person.newBook)) {
        person.favoriteBooks.push(Newbook);
    }
}

addToFavoriteBooks(reader, {

  title: 'Harry Potter e o Prisioneiro de Azkaban',

  author: 'JK Rowling',

  publisher: 'Rocco',

}) ;


console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`);
// para acessar a key "title" console.log(`O livro de ${reader.name} ${reader.lastName} se chama ${Object.keys(reader.favoriteBooks[0])[0]}`)

console.log(reader);


console.log('');
console.log('Exercício 2');
console.log('');