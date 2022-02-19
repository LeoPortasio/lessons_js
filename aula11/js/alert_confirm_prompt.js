alert('mensagem');
// alert --> função do objeto window(janela do navegador)

/* 
console.log('') --> método log do objeto console
sempre retorna o tipo de dado undefined
*/

// window.confirm('apagar realmente?');
// retorna valor boolean --> ok - true | cancelar -false
// podemos neste caso mudar o fluxo do programa a depender da ação do usuário

// podemos capturar o valor retornado assim:
const confirma = confirm('apagar realmente?');
// constante confirma vai receber true ou false
console.log(confirma);
// no navegador na aba console podemos digitar simplesmente confirma

window.prompt('Digite um nº:');
// quando uma função está dentro de um objeto, chamamos
// essa função de método, se não for um método do objeto
// chamamos de função. A grosso modo são todas funções

// tudo que o usuário digita no prompt tem como valor uma string
// neste caso devemos converter
