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

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`);
// para acessar a key "title" console.log(`O livro de ${reader.name} ${reader.lastName} se chama ${Object.keys(reader.favoriteBooks[0])[0]}`)




console.log('');
console.log('Exercício 2');
console.log('');


const addToFavoriteBooks = (person, newBook) => {
    if (Array.isArray(person.favoriteBooks)) {
        person.favoriteBooks.push(newBook);
    }
}

addToFavoriteBooks(reader, {
    
  title: 'Harry Potter e o Prisioneiro de Azkaban',

  author: 'JK Rowling',

  publisher: 'Rocco',

}) ;

reader.favoriteBooks.push({

  title: 'Harry Potter e o Prisioneiro de Azkaban',

  author: 'JK Rowling',

  publisher: 'Rocco',

})

console.log(reader);


console.log('');
console.log('Exercício 3');
console.log('');

let quantidade = 0;

function quantidades (user){
  for (index = 0; index < user.favoriteBooks.length; index += 1) {
    quantidade = quantidade + 1
  }
  return quantidade
}
console.log(`${reader.name} tem ${quantidades(reader)} livro(s) favorito(s).`);


console.log('');
console.log('Exercício 4');
console.log('');

const order = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (fullOrder) => {
  fullOrder = `Olá ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}`;
     return fullOrder;
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
   fullOrder = `Olá, ${fullOrder.name}, o valor total de seu pedido de ${Object.keys(fullOrder.order.pizza).join(', ')} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total}.`;
   return fullOrder;
}

console.log(orderModifier(order));

console.log('');
console.log('Exercício 5');
console.log('');
console.log('ex1');

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const keyvalue = (object, ayPosition) => {
  let keyValor = Object.values(object.lessons)[ayPosition];
  return keyValor;
}

console.log(keyvalue(school, 1));

console.log('');

console.log('ex2');

console.log('');

const stuNumbers = (object) => {
  totNumClass = 0;
  for (index = 0; index < object.lessons.length; index += 1) {
    totNumClass = totNumClass + object.lessons[index].students;
  }
  return totNumClass;
}

console.log(`The number of students in this school is of ${stuNumbers(school)} students.`);

console.log('');

console.log('ex3');

console.log('');

const checkexistence = (object, keyName) => {
  let checker = '';
  for (let index = 0; index < object.lessons.length; index += 1)
    if (keyName in object.lessons[index] !== true) {
      checker = false
    } else {
      checker = true
    }
    return checker
}

console.log(checkexistence(school, 'professor'));

console.log('');

console.log('ex4');

console.log('');

const timeChange = (object) => {
  object.lessons[0].shift = 'Noite'
  return object
}

console.log((timeChange(school)));

console.log('');

console.log('ex5');

console.log('');

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];



const fruitCount = (object) => {

  let counts = {};

  for (index = 0; index < object.length; index += 1) {

    let fruit = object[index];
    
    if (counts[fruit] !== undefined) {
      counts[fruit] = counts[fruit] + 1;
    } else {
      counts[fruit] = 1;
    }  

  }
  return counts
}

 console.log(fruitCount(basket));
 



