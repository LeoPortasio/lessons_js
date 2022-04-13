const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// retorne a soma do dobro de todos os nºs pares
console.log('---------------------------------------------------');

const numerosPares = numeros
    .filter(valor => valor % 2 === 0) // Filtrar nº pares
    .map(valor => valor * 2) // Dobrar os valores
    .reduce((acumulador, valor) => acumulador + valor); // reduzir(somar tudo)

console.log(numerosPares);

console.log('---------------------------------------------------');

