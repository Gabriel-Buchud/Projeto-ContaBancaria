import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  private _limite: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }

  public sacar(valor: number): boolean {
    if (this.saldo + this._limite >= valor) {
      this.saldo = this.saldo - valor;
      return true;
    }

    console.log("\n Saldo Insuficiente!");
    return false;
  }

  public visualizar() {
    super.visualizar();
    console.log(colors.bg.black, colors.fg.white);
    console.log(`Limite: ${this._limite}`);
    console.log(colors.reset)
  }
}