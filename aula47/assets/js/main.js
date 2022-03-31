function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // de miléssimos de segundos para segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' // ou UTC
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++; // variavél vizinha da função pode acessar de fora para dentro, mas não podemos acessar ao contrário de dentro para fora
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elem = e.target; // target pega o evento em qualquer local do documento

        if (elem.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (elem.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (elem.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    });
}
relogio();








