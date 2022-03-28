// break      --> para iteração e sai do laço
// continue   --> pula para próxima iteração, mas continua o laço


//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numeros) {

//     if (num === 2) { // pula para próxima iteração sem mostrar o valor 2
//         console.log('pulei o nº 2');
//         continue;
//     }
//     console.log(num);
// }

// for (let num of numeros) {

//     if (num === 2 || num === 5) {
//         console.log(`pulei ${num}`);
//         continue;
//     }

//     if (num === 7) {
//         console.log('achei o sete, entretanto, não vou mostrá-lo e sair do laço!!!');
//         break;
//     }
//     console.log(num);
// }

// se quizermos mostrar o sete e sair do laço

// for (let num of numeros) {

//     if (num === 2 || num === 5) {
//         console.log(`pulei ${num}`);
//         continue;
//     }
//     console.log(num);

//     if (num === 7) {
//         console.log('achei o sete, vou mostrá-lo e sair do laço!!!');
//         break;
//     }
// }

// for (let i in numeros) {
//     let num = numeros[i];

//     if (num === 2 || num === 5) {
//         console.log(`pulei ${num}`);
//         continue;
//     }
//     console.log(num);

//     if (num === 7) {
//         console.log('achei o sete, vou mostrá-lo e sair do laço!!!');
//         break;
//     }
// }

// for (let i = 0; i < numeros.length; i++) {
//     let num = numeros[i];

//     if (num === 2 || num === 5) {
//         console.log(`pulei ${num}`);
//         continue;
//     }
//     console.log(num);

//     if (num === 7) {
//         console.log('achei o sete, vou mostrá-lo e sair do laço!!!');
//         break;
//     }
// }

// i = 0;
// while (i < numeros.length) {
//     let num = numeros[i];

//     if (num === 2 || num === 5) {
//         console.log(`pulei ${num}`);
//         i++; // atualizar a variável de controle antes do continue
//         continue;
//     }
//     console.log(num);

//     if (num === 7) {
//         console.log('achei o sete, vou mostrá-lo e sair do laço!!!');
//         i++; // atualizar a variável de controle antes do break
//         break;
//     }

//     i++;
// }

i = 0;
do {
    let num = numeros[i];

    if (num === 2 || num === 5) {
        console.log(`pulei ${num}`);
        i++; // atualizar a variável de controle antes do continue
        continue;
    }
    console.log(num);

    if (num === 7) {
        console.log('achei o sete, vou mostrá-lo e sair do laço!!!');
        i++; // atualizar a variável de controle antes do break
        break;
    }

    i++;
} while (i < numeros.length);
