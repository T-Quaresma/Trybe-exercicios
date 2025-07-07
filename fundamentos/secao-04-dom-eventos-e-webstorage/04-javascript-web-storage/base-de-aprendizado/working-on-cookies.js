//  O JavaScript permite a você que crie, leia e delete cookies por meio da propriedade document.cookie.

// Para criar um cookie, você precisa atribuir à propriedade document.cookie uma string que contenha o nome e
//  o valor do que se pretende armazenar:

// document.cookie = 'email=isabella@email.com';

//  Por definição, o cookie é deletado ao fechar o navegador. Para que isso não aconteça, você pode adicionar uma
//  data para expiração, como no exemplo a seguir.

// document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//  Você pode adicionar também o parâmetro path, que dirá ao navegador a qual caminho o cookie que você criou
//  pertence. Por padrão, o cookie pertence à página atual.

//  document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

// O JavaScript permite a você atribuir document.cookie a uma variável. Assim, você conseguirá ler as informações
//  que estão armazenadas. No exemplo a seguir, ao imprimir no console o valor de myCookie, o que será retornado
//  é uma string que contém o nome e o valor do cookie. Quando há mais de um par chave-valor, a variável armazenará
//  em uma única string os pares separados por ponto e vírgula.

// const myCookie = document.cookie;
// console.log(myCookie) // email=isabella@email.com

// Você pode também alterar o valor do cookie da mesma maneira que o criou. Para isso, basta atribuir ao
//  document.cookie a nova informação que você quer armazenar.

// document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// Para deletar o cookie, você não precisa especificar o valor que pretende deletar. É possível deletá-lo passando
//  uma data que já expirou:

// document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'