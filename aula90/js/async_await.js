function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na:', fase);
//     })
//     .catch(e => console.log(e));

// Podemos colocar um catch() para cada await ou englobar tudo em um try cacth
async function executa() {
    try {
        // const fase1 = await esperaAi('Fase I', rand());
        // console.log(fase1);

        const fase1 = esperaAi('Fase I', 1000);
        console.log(fase1);

        setTimeout(function () {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi('Fase II', rand()); // se não for string cai no catch() e não executa mais nada daqui para baixo
        console.log(fase2);

        const fase3 = await esperaAi('Fase III', rand());
        console.log(fase3);

        console.log('Terminamos na:', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();

// se não utilizarmos await --> a promise fica no estado de pending --> pendente
//fullfield --> resolvida
// rejected --> rejeitada
