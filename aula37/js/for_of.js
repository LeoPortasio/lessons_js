// for of --> percorre qquer objeto iterável e retorna o valor

const nomes = ['Leo', 'Mehler', 'Portasio'];


console.log('______________for clássico______________');
// ñ funciona c/ objetos
//  utiliza-se para iteráveis (arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('______________for in______________');
// Retorna o índice ou chave
//  Utiliza-se com string - arrays - objetos

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('______________for of______________');
// retorna o valor
// utiliza-se com iteráveis (arrays ou strings)

for (let valor of nomes) {
    console.log(valor);
}

console.log("_______outro for (for.each()) que iremos estudar posteriormente _______");

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});


