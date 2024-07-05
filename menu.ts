import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

  let opcao, numero, agencia, tipo, saldo, limite, dataRendimento: number;
  let titular: string;
  const tipoContas = [`Conta Corrente`, `Conta poupança`];

  const contas: ContaController = new ContaController();

  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Vera Verao", 15000, 1000);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Jose wilcker", 1000, 10);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {

    console.log(colors.bg.black, colors.fg.bluestrong,
      "=====================================================");
    console.log("                                                     ");
    console.log(colors.fg.white,
      "                  Tio Patinhas Bank                  ");
    console.log(colors.reset,
      "                                                     ");
    console.log(colors.bg.black, colors.fg.bluestrong,
      "=====================================================");
    console.log(colors.fg.gray,
      "\n      Escolha a operação que deseja realizar:      ");
    console.log(colors.reset);
    console.log("                                                     ");
    console.log("            1 - Abrir Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            8 - Realizar transferencia bancaria      ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            5 - Excluir Conta                        ");
    console.log("            7 - Depositar                            ");
    console.log("            6 - Sacar                                ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log(colors.bg.black, colors.fg.bluestrong,
      "=====================================================");
    console.log("                                                     ",
      colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(colors.fg.bluestrong,
        "\nTio Patinhas Bank, Fazendo cada moeda render muito!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong,
          "\n\nCriar Conta\n\n", colors.reset);

        console.log(`Digite o número da Agência: `);
        agencia = readlinesync.questionInt("");

        console.log(`Digite o nome do Titular da Conta: `);
        titular = readlinesync.question("");

        console.log(`Digite o Tipo da Conta: `);
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log(`Digite o Saldo da Conta: `);
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log(`Digite o Limite da Conta: `);
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))

            break;

          case 2:
            console.log(`Digite a Data de Rendimento da Conta: `);
            dataRendimento = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, dataRendimento))

            break;
        }

        keyPress()
        break;
      case 2:
        console.log(colors.fg.whitestrong,
          "\nListar todas as Contas\n", colors.reset);
        contas.listarTodas();

        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong,
          "\nConsultar dados da Conta - por número\n", colors.reset);

        console.log(`Digite o numero da Conta: `)
        numero = readlinesync.questionInt("");

        contas.procurarPorNumero(numero);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong,
          "\nAtualizar dados da Conta\n", colors.reset);

        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong,
          "\nApagar uma Conta\n", colors.reset);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.whitestrong,
          "\nSaque\n", colors.reset);

        keyPress()
        break;
      case 7:
        console.log(colors.fg.whitestrong,
          "\nDepósito\n", colors.reset);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.whitestrong,
          "\nTransferência entre Contas\n", colors.reset);

        keyPress()
        break;
      default:
        console.log(colors.fg.whitestrong,
          "\nOpção Inválida!\n", colors.reset);

        keyPress()
        break;
    }
  }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {

  console.log("===================================================");
  console.log("Projeto Desenvolvido por: Gabriel Buchud Rodrigues ");
  console.log("Email - gabrielbuchudestudos@gmail.com");
  console.log("https://github.com/Gabriel-Buchud");
  console.log("=====================================================");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();