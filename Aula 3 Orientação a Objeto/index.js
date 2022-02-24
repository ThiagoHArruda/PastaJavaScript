import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 11122233304)
const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500)
    //console.log(conta1);
conta1.sacar(100)



const cliente2 = new Cliente("Alice", 22233344405)
const conta2 = new ContaCorrente(cliente2, 1002)
conta2.depositar(300)


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
    //console.log(conta1);
const conta = new Conta(0, cliente1, 1001)
console.log(conta);

//console.log(contaPoupanca);

//conta2.saldo = 3000 <-- Não dá para atualizar por causa do get
/*conta1.transferir(200, conta2)
console.log(conta1, conta2); transferindo dinheiro*/

//console.log(ContaCorrente.numeroContas); numero de contas