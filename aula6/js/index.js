//criando variáveis com rótulo utilizando o let
let nome = 'João';
let idade;
idade = 38;

//podemos criar variáveis com var (mais antigo)

// nunca criar variáveis com palavras reservadas

// criar variáveis com nomes significativos

// nunca criar variáveis começadas com nºs

// utilizar letras minúsculas

//não pode conter espaços ou traços

//nome composto utilzamos camelCase

// variáveis são Case-sensitive

// não podemos redeclarar variáveis

// devemos utilizar let em vez de var

console.log(nome, 'tem', idade, 'anos');
console.log(nome, ' nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve um filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

// alterando o valor da váriável nome, alteraremos em todas as frases

// se executarmos o código sem um valor para a variável let,
// vai funcionar, como uma variável undefined

/*
podemos definir a variável e depois inicializá-la

let nome;
nome = 'Leo' <-- inicialização da variável

*/

idade = 45;
console.log('Leo tem', idade, 'anos');
// podemos alterar o valor da variável
// entretanto não podemos redeclarar a variável
//let nome;  <-- erro!!!