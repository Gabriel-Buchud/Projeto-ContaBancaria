import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';


export function main() {

  let opcao: number;

  const c1: Conta = new Conta(1, 1234, 1, 'Gabriel Rodrigues', 350000.00);
  const c2: Conta = new Conta(1, 2345, 2, "João da Silva", 150000.00);

  c1.visualizar();
  c2.visualizar();

  while (true) {

    console.log(colors.bg.black, colors.fg.bluestrong,
      "=====================================================");
    console.log("                                                     ");
    console.log(colors.fg.white,
      "                   SKY GARDEN BANK                   ");
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
        "\nSky Garden Bank, juntos por um mundo mais sustentável!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong,
          "\n\nCriar Conta\n\n", colors.reset);

        keyPress()
        break;
      case 2:
        console.log(colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n", colors.reset);

        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n", colors.reset);

        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n", colors.reset);

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

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
  console.log("\n===================================================");
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