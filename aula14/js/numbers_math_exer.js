// let numero = prompt('Digite um nº:');
// numero = Number(numero);
const numero = Number(prompt('Digite um nº: '));
const numeroTitulo = document.getElementById('numero-titulo');
// método para obter elemento por Id
// document. --> estamos manipulando o DOM
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu nº + 2 é: ${numero + 2}</p>`;
texto.innerHTML += `<p>Raíz quadrada do seu nº é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Nº é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>${numero} com duas casas decimais: ${numero.toFixed(2)}</p>`;






