const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
let message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;

console.log(message);


let achievments = 0;

for (index = 0; index < player.bestInTheWorld.length; index += 1) {
  achievments = achievments + 1;  
}

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${achievments} vezes.`);


console.log('');
console.log('second example');
console.log('');

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(customer, 'email', 'emailtest@gmail.com');
addProperty(customer, 'fone', '21975634692');
addProperty(customer, 'useGitHub', 'testgithub.io');
addProperty(customer, 'linkedIn', 'www.testlinkedin.com');

console.log(customer);




