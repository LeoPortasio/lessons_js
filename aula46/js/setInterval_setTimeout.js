function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    });
}

// function intervalo() {
//     console.log(mostraHora());
// }

// setInterval(function () {     // função anônima
//     console.log(mostraHora());
// }, 1000);

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {  // esse método setTimeout executa somente uma vez
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('Olá mundo!!!');
}, 5000);



