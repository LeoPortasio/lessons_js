// esta função busca nossos páginas
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // verbo - url - síncrono ou assíncrono
        xhr.send(); // se fosse um post, utilizaríamos como parâmetro os dados do formulário html

        xhr.addEventListener('load', () => { // checa quando essa requesição foi carregada
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // o a função success recebe o que queremos buscar do documento html ou json, etc
            } else {
                reject(xhr.statusText);
            }
        });
    });

};

// capturar os eventos de click e carregá-las na página
document.addEventListener('click', e => { // qual elemento está sendo clicado
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // qualquer elemento que for clicado, o nome da tag e converte para minúsculo

    if (tag === 'a') {
        e.preventDefault(); // não deixa carregar a página
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href'); // link que foi clicado

    const objConfig = { // carrega a página via AJAX
        method: 'GET', // se fosse post teria um tipo de dado - requisição no corpo do método send() da função request
        url: href
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

