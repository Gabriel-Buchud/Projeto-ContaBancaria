import { colors } from '../util/Colors';

// Criando a classe Conta.
export class Conta {

  // Definir os atributos da Classe.
  private _titular: string;
  private _agencia: number;
  private _tipo: number;
  private _numero: number;
  private _saldo: number;

  // Criando o métudo construtor, responsável por criar os objetos da classe.
  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    this._titular = titular;
    this._agencia = agencia;
    this._tipo = tipo;
    this._numero = numero;
    this._saldo = saldo;
  }

  // Definindo o método get e set de cada atributo.
  // Método get: recebe valor.
  // Método set: edita o valor recebido.

  public get numero(): number {
    return this._numero;
  }

  public get agencia(): number {
    return this._agencia;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get titular(): string {
    return this._titular;
  }

  public get saldo(): number {
    return this._saldo;
  }

  public set numero(value: number) {
    this._numero = value;
  }

  public set agencia(value: number) {
    this._agencia = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set titular(value: string) {
    this._titular = value;
  }

  public set saldo(value: number) {
    this._saldo = value;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("Saldo é insufieciente!")
      return false;
    }
    this._saldo = this._saldo - valor;
    return true;
  }

  //Metodo depositar**

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  // Método para visualizar todos os dados.
  public visualizar(): void {

    console.log(colors.bg.black, colors.fg.bluestrong,
      "\n=====================================================");
    console.log(colors.fg.white,
      "                     Dados da Conta                    ");
    console.log(colors.bg.black, colors.fg.bluestrong,
      "  =====================================================");

    console.log(colors.bg.black, colors.fg.white);
    console.log(`\nTitular da conta ${this.titular}`);
    console.log(`\nNumero da agencia ${this.agencia}`);
    console.log(`\nNumero da conta ${this.numero}`);
    console.log(`\nTipo da conta ${this.tipo}`);
    console.log(`\nNúmero da conta: ${this._saldo.toFixed(2)}`);
    console.log(colors.reset);

  }



}