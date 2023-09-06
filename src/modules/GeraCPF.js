import ValidaCpf  from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return  String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNewCpf() {
        const cpfSemDigito = this.rand();
        const digito1  = ValidaCpf.criaDigit(cpfSemDigito);
        const digito2  = ValidaCpf.criaDigit(cpfSemDigito + digito1);
        const newCpf = cpfSemDigito + digito1 + digito2;
        return newCpf;
    }
}