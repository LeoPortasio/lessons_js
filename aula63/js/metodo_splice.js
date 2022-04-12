// nomes.splice(índice_atual, qtd_delete, elem1, elem2, ...)

//               -5       -4       -3         -2        -1
//                0        1        2          3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(4, 1) // remove do índice 4 um elemento
// const removidos = nomes.splice(4, 1);

// const removidos = nomes.splice(-2, Number.MAX_VALUE); // nº máximo do JS
const removidos = nomes.splice(2, 2, 'Leo');
console.log(nomes, removidos);






