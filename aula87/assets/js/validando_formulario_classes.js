class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.eventos();
    }
    // arrow fanction não permite a alteração do this
    // função de callback
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); // nome de método que vemos no mundo real da programação --> muito no react
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // para o formulário não ser enviado
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('formulário enviado!');
            this.formulario.submit(); // envia formulário
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senha e repetir senha precisam ser iguais!');
            this.criaErro(repetirSenha, 'Senha e repetir senha precisam ser iguais!');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa conter entre 6 e 12 caracteres!');
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove(); // envia msg de erro somente uma vez para campos vazios
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; // pega elemento anterior do html

            if (!campo.value) {
                this.criaErro(campo, `preencher "${label}", não pode estar vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.valida_cpf(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if (!usuario.match(/[a-zA-Z0-9]+/g)) { // expressão regular
            this.criaErro(campo, 'Nome de usuário precisa conter letras e/ou números');
            valid = false;
        }

        return valid;
    }

    valida_cpf(campo) {
        const cpf = new ValidaCpf(campo.value); // o objeto cpf da classe ValidaFormulario, do método validaCPF() é instanciado pela classe ValidaCpf do arquivo valida_cpf.js

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido!');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);// insere depois do campo a div com o erro
    }
}

const valida = new ValidaFormulario();




