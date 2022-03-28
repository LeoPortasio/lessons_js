// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto - não encontrado!');
//     console.log(err); // nunca mostre o erro para o usuário por segurança - AQUI SÓ PARA ESTUDO
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw ('x e y precisam ser nºs!');
        throw new ReferenceError('x e y precisam ser nºs!');
        // função contrutora do js que mostra os erros padrões além da nossa menssagem de erro
        // mais à frente aprenderemos utilizar as funções construtoras 
    }
    return x + y;
}

try {
    console.log(soma(7, 2));
    console.log(soma('7', 2));
} catch (err) {
    // console.log(err); // nunca lançar esse erro no front-end para o usuário
    console.log('alguma coisa mais amigável para o usuário');
}
