class ContaBancaria { // cria classe 
    constructor(agencia,numero,tipo,saldo){ // definindo parametros
        this._agencia = agencia; // instanciando
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){ // criando get 
        return this._saldo;
    }
    set saldo(valor) { // criando set
        this._saldo = valor;
    }

    sacar(valor){ // cria metodo sacar
        if(valor > this._saldo){ // aplicando condição 
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){ // cria metodo depositar
    this._saldo = this._saldo + valor;
    return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria { // cria classe e linka classe pai
    constructor(agencia,numero,CartaoCredito) { // define parametros 
        super (agencia,numero); // setando para classe pai
        this.tipo = "corrente"; // instanciando
        this._cartaoCredito = CartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}
    class ContaPoupanca extends ContaBancaria { // cria classe 
        constructor(agencia,numero) { // define parametros 
            super (agencia,numero);// setando para classe pai
            this.tipo = "poupança"; // instanciando
    }
}
    class ContaUniversitaria extends ContaBancaria { // cria classe e linka classe pai
        constructor(agencia,numero) { // define parametros 
            super (agencia,numero); // setando para classe pai
            this.tipo = "universitaria"; // instanciando
    }
    sacar(valor) {
        if (valor > 500){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
    }
}


