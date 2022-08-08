function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('cai no erro');
            return; // sem o return o código continuaria executando
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all - Promise.race - Promise.resolve - Promise.reject

const promises = [
    // 'valor 1',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    // esperaAi(1000, 1000), // esse erro vai direto para o catch()
    // 'outro valor'
];

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (e) {
//         console.log(e);
//     })

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (e) {
//         console.log(e);
//     })
// function baixaPg() {
//     const emCache = false;
//     if (emCache) {
//         return Promise.resolve('Página em cache');
//     } else {
//         return esperaAi('Baixei a página', 3000);
//     }
// }

function baixaPg() {
    const emCache = true;
    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPg()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

