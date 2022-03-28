// função com nome ePaisagem que receba altura e largura como argumento
// de uma imagem (number). retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura) {
//     // return largura > altura ? true : false; 
//     return largura > altura; // essa condição de retorno da função já verifica true or false, não há necessidade da linha acima neste caso
// }
// console.log(ePaisagem(1920, 1080));

// se os valores dos argumentos forem iguais(imagem quadrada), retorna false
// neste caso do retorno da função checar o operador >,  se fosse >= retornaria true

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));