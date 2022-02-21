let num1 = 1;
let num2 = 2.0;
let num3 = 1500;

console.log(num1 + num2);

// coverter números em strings

console.log(num1.toString() + num2); // só converte num1 neste momento
console.log(typeof (num1)); // ainda é um tipo de dado number

// num1 = num1.toString(); // alteramos o tipo de dado para string
// console.log(typeof (num1));

console.log(num3.toString(2));
// representação binária do valor da variável num3

console.log(num2.toFixed(2));
// determina quantidade de casas decimais de num2
// arredondando para baixo ou para cima
// só altera o valor de num2 neste momento
// IEEE 754-2008 - Default utilizado para casas decimais no Javascript

console.log(Number.isInteger(num3));
// retorna valor boolean, porém não é um valor preciso, por causa do arredondamento

num2 = parseFloat(num2.toFixed(2));
console.log(Number.isInteger(num2));
// temos que indicar para o JavaScript que queremos precisão e não arredodamento
// parseFloat ou parseInt e fixamos as casas decimais, neste caso em duas casas

let temp = num1 * 'olá';
console.log(Number.isNaN(temp)); // (NaN) Not a Number
// retorna boolean








