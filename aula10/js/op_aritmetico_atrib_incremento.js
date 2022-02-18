/* Aritméticos

+ adição e concatenação
- subtração
* multiplicação
/ divisão
** potenciação
% resto da divisão

*/

const num1 = parseInt('5');
const num2 = 10;
const num3 = 4;
const num4 = 2;
const num5 = 'Leo';

console.log(num1 + num2); //concatenou

console.log(num2 + num3 * num4);
// não está calculando na ordem que colocamos na expressão
// está calculando na ordem de precedência, se quizermos
// alterar a precedência de mos utilizar o parênteses

/* ordem de precedência:

()
**
*
/
%
+ e -

*/
let contador = 1;
// contador++;
// console.log(contador);

// ++ --> operador de atribuição (incrementa)
// -- --> operador de atribuição (decermenta)

console.log(contador++); // aqui vale dois, mas só mostra resultado na próxima iteração, então ainda mostra como resultado 1
console.log(contador); // mostra como resultado 2
// 

console.log(++contador);
// incrementa, obtém e mostra o valor, no caso resultado 3

/* boa prática de programação é incrementar ou decrementar e depois
mostrar o resultado com o console.log

let contador = 1;
contador++ ou ++contador; (ou decrementar)
console.log(contador);

e não:

let contador = 1;
console.log(contador++);

*/

const passo = 2;
contador += passo; //conta de dois em dois
console.log(contador);

console.log(num2 * num5); //javascript não multiplica nº com string
/*
NaN --> Not a number
podemos tratar esse tipo de dado
*/

// console.log(num1 * num2);
console.log(typeof num1);
// aqui o javascrip converteu s string em números e realizou a operação
// conseguei entender que deveria ser realizada uma operação aritmética

console.log(num1 + num2);
console.log(typeof num1);
// na constante num1 declaramos parseInt('5') transformando string em number
// utilizaríamos parsFlot no caso de números com casas decimais
// se utilizarmos number o javascript irá entender independente de ter casas 
// decimais ou não, consegue fazer a conta e retornar o resultado
