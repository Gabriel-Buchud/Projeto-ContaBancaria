import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from './src/util/Colors';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, dataRendimento: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

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

          console.log('Digite o Número da Agência: ');
          agencia = readlinesync.questionInt("");

          console.log('Digite o Nome do Titular da Conta: ');
          titular = readlinesync.question("");

          console.log('Digite o Tipo da Conta: ');
          tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

          console.log('Digite o Saldo da Conta: ');
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
              case 1:
                  console.log('Digite o Limite da Conta: ');
                  limite = readlinesync.questionFloat("");
                  contas.cadastrar(
                      new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                  )
                  break;
              case 2:
                  console.log('Digite a Data de Aniversário da Conta: ');
                  dataRendimento = readlinesync.questionInt("");
                  contas.cadastrar(
                      new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, dataRendimento)
                  )
                  break;
          }

          keyPress()
          break;
      case 2:
          console.log(colors.fg.whitestrong,
              "\n\nListar todas as Contas\n\n", colors.reset);
          contas.listarTodas();
          keyPress()
          break;
      case 3:
          console.log(colors.fg.whitestrong,
              "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

          console.log("Digite o número da Conta: ")
          numero = readlinesync.questionInt("");

          contas.procurarPorNumero(numero);

          keyPress()
          break;
      case 4:
          console.log(colors.fg.whitestrong,
              "\n\nAtualizar dados da Conta\n\n", colors.reset);

          console.log("Digite o número da Conta: ")
          numero = readlinesync.questionInt("");

          let conta = contas.buscarNoArray(numero);

          if (conta) {

              console.log('Digite o Número da Agência: ');
              agencia = readlinesync.questionInt("");

              console.log('Digite o Nome do Titular da Conta: ');
              titular = readlinesync.question("");

              console.log('Digite o Saldo da Conta: ');
              saldo = readlinesync.questionFloat("");

              tipo = conta.tipo;

              switch (tipo) {
                  case 1:
                      console.log('Digite o Limite da Conta: ');
                      limite = readlinesync.questionFloat("");
                      contas.atualizar(
                          new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                      )
                      break;
                  case 2:
                      console.log('Digite a Data de Aniversário da Conta: ');
                      dataRendimento = readlinesync.questionInt("");
                      contas.atualizar(
                          new ContaPoupanca(numero, agencia, tipo, titular, saldo, dataRendimento)
                      )
                      break;
              }

          } else {
              console.log(`\nA Conta número: ${numero} não foi encontrada!`)
          }

          keyPress()
          break;
      case 5:
          console.log(colors.fg.whitestrong,
              "\n\nApagar uma Conta\n\n", colors.reset);

          console.log("Digite o número da Conta: ")
          numero = readlinesync.questionInt("");

          contas.deletar(numero);

          keyPress()
          break;
      case 6:
          console.log(colors.fg.whitestrong,
              "\n\nSaque\n\n", colors.reset);

          keyPress()
          break;
      case 7:
          console.log(colors.fg.whitestrong,
              "\n\nDepósito\n\n", colors.reset);

          keyPress()
          break;
      case 8:
          console.log(colors.fg.whitestrong,
              "\n\nTransferência entre Contas\n\n", colors.reset);

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

main();
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