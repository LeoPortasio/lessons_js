/*
AVALIAÇÃO DE CURTO-CIRCUITO

&& -> And

|| -> Or

false (literal)

falsy --> 
0
''
""
``
null/ undefined
NaN

*/

// AND -->
console.log('leo' && 'azul' && NaN);
// retorna false quando encontra um valor literal false ou outro valor falsy

console.log('leo' && 'Rosa' && 'Moto');
// retorna o último valor true, quando todos os valores forem true

function falaOi() {
    return 'oi';
}

// const vaiExecutar = false;
// let vaiExecutar;
const vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());

// Or -->

const corUsuario = false;
const corDefault = corUsuario || 'preto';
console.log(corDefault);
// retona preto que foi o 1º valor true encontrado
// se o usuário alterar a cor (sendo um valor true) o que retorna é a corUsuario

const a = 0;
const b = null;
const c = 'false'; // -> valor true será retornado
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
