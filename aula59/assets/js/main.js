function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.display.focus();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const elem = e.target;
            if (elem.classList.contains('btn-num')) this.addNumDisplay(elem);
            if (elem.classList.contains('btn-clear')) this.clear();
            if (elem.classList.contains('btn-del')) this.del();
            if (elem.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); // CUIDADO COM A SEGURANÇA
            if (!conta) {
                alert('Conta Inválida!')
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            };
        });
    };

    this.addNumDisplay = elem => {
        this.display.value += elem.innerText; // aqui começamos a remover o parênteses e a chave da arrow function para deixar o código mais limpo e moderno
        this.display.focus();
    };

    this.clear = () => {
        this.display.value = '';
        this.display.focus();
    };

    this.del = () => this.display.value = this.display.value.slice(0, -1);
}
const calculadora = new Calculadora();
calculadora.inicia();




