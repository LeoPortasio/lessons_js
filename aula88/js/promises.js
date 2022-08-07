function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// sem as promises resolveríamos com as funções de callback, para isso, temos
// que receber callback (cb) como parâmetro na funcão esperaAi
// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if (cb) cb(); // se receber cb executa cb
//     }, tempo);
// }

// esperaAi('frase1', rand(1, 3), function () {
//     esperaAi('frase2', rand(1, 3), function () {
//         esperaAi('frase3', rand(1, 3));
//     });
// });

function esperaAi(msg, tempo) {
    // Promise() recebe por default arrow function e dois parâmetros, sempre!!!
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE!');
        // poderíamos utilizar new Error('ERRO') como parâmetro de reject
        setTimeout(() => {
            //console.log(msg);
            resolve(msg); // resolve recebe somente um parâmetro sempre!!!
        }, tempo);
    });
}
//  tanto then(), como catch() recebem como parâmetro uma função 
esperaAi('Conexão com BD', rand(1, 3))
    .then(resposta => { // resposta é argumento de msg
        console.log(resposta);
        return esperaAi('Buscando dados do BD', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando dados do BD', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
        // erro, no 1º parâmetro espera-se string
        // não será exibido informações para o usuário, o código para aqui, 
        // e vai para o catch()!!!
    })
    .then(() => {
        console.log('Exibi informação para o usuário');
    })
    .catch(e => {
        console.log('ERRO:', e); // e --> é argumento do reject
    });
console.log('Isso será exibido antes das promises')
// as promises ocorrem em paralelo com a execução do código de forma assíncrona





