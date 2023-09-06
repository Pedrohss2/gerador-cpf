
export default class ValidaCpf {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
    }

    valida() {
        if(typeof this.cpf !== 'string') return false;
        if(!this.cpf) return false;
        if(this.cpf.length !== 11) return false;
        if(!this.geraCpf()) return false;
        if(this.sequencia()) return false;

        return this.geraCpf(); //Retornado a função que gera o cpf
    }

    geraCpf() {
        const cpfSemDigito = this.cpf.slice(0, -2);
        const digito1 = this.criaDigit(cpfSemDigito); 
        const digito2 = this.criaDigit(cpfSemDigito + digito1) ;
        const novoCpf = cpfSemDigito + digito1 + digito2;

       return novoCpf === this.cpf;
    }

    static criaDigit(cpfSemDigito) {
        let total = 0;
        let regressivo = cpfSemDigito.length + 1;

        for(let stringNmerica of cpfSemDigito) {
            total += regressivo * Number(stringNmerica)
            regressivo--;
        }
       
        let digito = 11 - (total % 11);
        return digito <= 9 ? digito: '0';
    }

    sequencia() {
        return this.cpf.charAt(0).repeat(11) === this.cpf;
    }
        
}
