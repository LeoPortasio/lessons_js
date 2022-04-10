function criaCalculadora() {
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {

                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta); // eval() tomar cuidado com a segurança, pois eval pode ser sobrescrito no display por código malicioso

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        btnParaDisplay(valor) { //recebe como parâmetro o inner.text da classe btn-num
            this.display.value += valor; // concatena os textos dos botões no display
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // tamanho da string menos 1
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => { // se utilizarmos arrow function ela não muda o valor de this 
                const elem = e.target; // qual local foi clicado

                if (elem.classList.contains('btn-num')) {
                    this.btnParaDisplay(elem.innerText); // quando um método é chamado de dentro de outro método, precisamos da palavra this
                }

                if (elem.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elem.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (elem.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }); // bind(this) utiliza o this da calculadora e não o this deste método se não utilizarmos arrow function
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();