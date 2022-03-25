// array de objetos
const elementos = [
    { tag: 'p', texto: 'Frase 1', }, // índice 0
    { tag: 'div', texto: 'Frase 2', }, // índice 1
    { tag: 'section', texto: 'Frase 3', }, // índice 2
    { tag: 'footer', texto: 'Frase 4', } // índice 3
];
// seleciona a classe de um elemento no html
const container = document.querySelector('.container');

// cria o elemento que vamos adicionar no html
const div = document.createElement('div');

// vamos percorrer os elementos(objetos) do array
for (let i = 0; i < elementos.length; i++) {
    // console.log(elementos[i].tag); // aqui cada iteração do laço mostra o valor de cada objeto tag

    // associação via desestruturação
    let { tag, texto } = elementos[i];

    // a cada iteração do for a variável tagCriada recebe o objeto tag, que será criado no html
    let tagCriada = document.createElement(tag);

    // todos os valores dos objetos tag serão iseridos no HTML junto aos valores dos objetos texto
    // tagCriada.innerText = texto; // como não tem nenhum html no nosso texto, podemos utilizar innerText ao invés de innerHTML

    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);

    // insere no html 
    div.appendChild(tagCriada);
}

container.appendChild(div);





