// const data = new Date(); // --> função construtora
// console.log(data.toString());

// new Data(0); --> data zero 01/01/1970 --> timestamp Unix ou época Unix
// valore negativo será naterior a esta data e positivo posterior

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data1 = new Date(0 + tresHoras + umDia);
// console.log(data1.toString());
// const data2 = new Date(0);
// console.log(data2.toString());

// const data = new Date(2019, 1, 14, 10, 40, 55, 500);
// console.log(data.toString());
// caso os miléssimos de segundos seja superior a 999 o js corrige os segundos
// isso ocorre dos segundos para os minutos e assim por diante
//  se omitirmos algum valor, aparecerá para o usuário zerado
// meses representa-se de 0 a 11

// const data = new Date('2019-02-14 10:40:59.500');
// console.log('Dia', data.getDate()); // --> obtém o dia
// console.log('Mês', data.getMonth() + 1); // --> obtém o mês (de 0 a 11)
// console.log('Ano', data.getFullYear()); // --> obtém o ano
// console.log('Hora', data.getHours()); // --> obtém a hora
// console.log('Min', data.getMinutes()); // --> obtém os minutos
// console.log('Seg', data.getSeconds()); // --> obtém os segundos
// console.log('Miléssimos', data.getMilliseconds()); // --> obtém o miléssimos de segundos
// console.log('Dia da Semana', data.getDay()); // --> obtém o dia da semana (0(domingo) - 6(sábado))

// console.log(data.toString());
// console.log(Date.now());
// obtém os míléssimos de segundos da data atual
// representa do marco zero até a data atual em miléssimos de segundos
// podemos ver em códigos js datas representadas por miléssimos de segundos

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


