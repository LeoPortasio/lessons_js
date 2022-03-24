// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(letras);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

// ...rest operator, ...spread operator
const [primeioNumero, segundoNumero, ...resto] = numeros;
console.log(primeioNumero, segundoNumero);
console.log(segundoNumero);
console.log(resto);

const [um, , três, , cinco, sete] = numeros;
console.log(um, três, cinco);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][1]); // valor 5 do array 1
const [, [, , seis]] = numeros2; // 1ª vírgula pula o 1º array - 2ª vírgula pula valor 4 3 3º vírgula pula valor 5, então definimos o 6º valor com nome seis
console.log(seis);

const [lista1, lista2, lista3] = numeros2;
console.log(lista3);
console.log(lista3[2]); // 3º valor da lista 3
