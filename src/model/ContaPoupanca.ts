import { Conta } from "./Conta";
import { colors } from '../util/Colors';

export class ContaPoupanca extends Conta {
  private _dataRendimento: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    dataRendimento: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._dataRendimento = dataRendimento;
  }

  public get aniversario(): number {
    return this._dataRendimento;
  }

  public set aniversario(value: number) {
    this._dataRendimento = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(colors.bg.black, colors.fg.white);
    console.log(`Data do rendimento: ${this._dataRendimento}`);
    console.log(colors.reset);
  }
}