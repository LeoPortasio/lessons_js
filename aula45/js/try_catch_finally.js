// try {
//     console.log('Abri um arquivo'); // executa
//     console.log('Manipulei o arquivo e deu erro'); // vai direto para o catch e finally
//     console.log('Fechei o arquivo'); // não executa
// } catch (e) {
//     console.log('Tratei o erro');
// } finally {
//     console.log('Sempre vou ser executado');
// }

// function retornaHora(data) { // data é um objeto da função construtora Date
//     if (!(data instanceof Date)) {
//         throw new TypeError('Esperando instancia de Date');
//     }
// }
// retornaHora(); retornar a mensagem da função
// retornaHora(new Date());
// não retona nada, pois agora o parâmetro data é objeto da função construtora Date

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // se receber uma data e não for instacia de Date
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) { // se não receber uma data
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // retorna hora no formato 24h
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(); // se o argumento for data retorna a hora definida, se for nada retona a hora atual, outra coisa retona o erro
    console.log(hora);
} catch (e) {
    // tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um Bom dia')
}




