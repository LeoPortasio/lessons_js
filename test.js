// let numerosApostados = [2, 5, 10, 22, 36, 43, 49, 55];
// let numerosSorteados = [3, 7, 20, 22, 36, 49];
// let numerosConferidos = [];

// for (let index = 0; index < numerosApostados.length; index += 1) {
//     for (let indexSorteado = 0; indexSorteado < numerosSorteados.length; indexSorteado += 1) {
//         if (numerosApostados[index] === numerosSorteados[indexSorteado]) {
//             numerosConferidos.push(numerosSorteados[indexSorteado]);
//         }
//     }
// }
// console.log(numerosConferidos);

// let valoresProdutos = [10, 12, 8];

// // function calculaPrecos(valoresProdutos) {
// //     try {

// let somaTotal = 0;
// /***** Não altere os códigos acima *****/


// for (i = 0; i < valoresProdutos.length; i += 1) {
//     somaTotal += valoresProdutos[i];
// }
// console.log(somaTotal);


// let array = [2, 5, 10, 22, 36, 43, 49, 55, 33, 3, 61];
// let numerosInseridos = [];

// function insereNumeros() {

//     for (let n = 0; n < array.length; n++) {
//         if (array[n] % 3 === 0) {
//             numerosInseridos.push(array[n]);
//         } else {
//             numerosInseridos.push(array[n] * 3);
//         }
//     }
// }
// insereNumeros();
// console.log(numerosInseridos);

let media = 0;
let soma = 0;
const arrayNumeros = [4, 5, 10];

function mediaDosNumeros(arrayNumeros) {

    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    media = soma / arrayNumeros.length;
    return media;
}
console.log(mediaDosNumeros(arrayNumeros));


