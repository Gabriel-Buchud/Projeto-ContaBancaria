
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
 
export class ContaController implements ContaRepository {
    
  // Coleção Array que vai armazenar os objetos conta
  private listaContas: Array<Conta> = new Array<Conta>();

  // Controlar os números das Contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
        
    }
   
    listarTodas(): void {
        for(let conta of this.listaContas){
        conta.visualizar()
        }
        
    }
   
    cadastrar(conta: Conta): void {
      this.listaContas.push(conta);
      console.log(`A Conta foi cadastrada com sucesso!`)
        
    }
   
    atualizar(conta: Conta): void {
        
    }
   
    deletar(numero: number): void {
        
    }
   
    sacar(numero: number, valor: number): void {
        
    }
   
    depositar(numero: number, valor: number): void {
        
    }
   
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        
    }
   
    // Métodos Auxiliares

    public gerarNumero(): number{
      return ++ this.numero;
    }
}