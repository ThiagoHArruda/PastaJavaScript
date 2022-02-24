import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0

    constructor(cliente, agencia) {
            super(0, cliente, agencia)
            ContaCorrente.numeroContas += 1
        }
        //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
}