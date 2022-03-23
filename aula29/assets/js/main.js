const h1 = document.querySelector('.container h1');
const data = new Date();

// function getDayWeekdayText(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//     }
// }

// function getNameMonth(numMes) {
//     let numMesTexto;
//     switch (numMes) {
//         case 0:
//             numMesTexto = 'Janeiro';
//             return numMesTexto;
//         case 1:
//             numMesTexto = 'Fevereiro';
//             return numMesTexto;
//         case 2:
//             numMesTexto = 'Março';
//             return numMesTexto;
//         case 3:
//             numMesTexto = 'Abril';
//             return numMesTexto;
//         case 4:
//             numMesTexto = 'Maio';
//             return numMesTexto;
//         case 5:
//             numMesTexto = 'Junho';
//             return numMesTexto;
//         case 6:
//             numMesTexto = 'Julho';
//             return numMesTexto;
//         case 7:
//             numMesTexto = 'Agosto';
//             return numMesTexto;
//         case 8:
//             numMesTexto = 'Setembro';
//             return numMesTexto;
//         case 9:
//             numMesTexto = 'Outubro';
//             return numMesTexto;
//         case 10:
//             numMesTexto = 'Novembro';
//             return numMesTexto;
//         case 11:
//             numMesTexto = 'Dezembro';
//             return numMesTexto;
//         default:
//             numMesTexto = '';
//     }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numMes = data.getMonth();

//     const nomeDia = getDayWeekdayText(diaSemana);
//     const nomeMes = getNameMonth(numMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} 
//     de ${data.getFullYear()} - 
//     ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
// }
// h1.innerHTML = criaData(data);

// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
// resolvido em uma linha apenas, sem utilizar switch case

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numMes];
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} 
    de ${data.getFullYear()} - 
    ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);