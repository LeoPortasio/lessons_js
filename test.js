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

const valoresProdutos = [10, 12, 8];

// function calculaPrecos(valoresProdutos) {
//     try {

let somaTotal = 0;
/***** Não altere os códigos acima *****/


for (i = 0; i < valoresProdutos.length; i += 1) {
    somaTotal += valoresProdutos[i];
}
console.log(somaTotal);