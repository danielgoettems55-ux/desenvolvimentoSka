
export class Calculadora {
    
    resultado:number = 0;
  Multiplicar(num1: number, num2: number){
    this.resultado =num1 * num2;
  }

  Divisao(num1: number, num2: number){
    this.resultado=num1 / num2;
  }

  Adicao(num1: number, num2: number){
    this.resultado =num1 + num2;
  }

  Subtracao(num1: number, num2: number){
    this.resultado =num1 - num2;
  }

  ExibirResultado(){
    console.log("Resultado é: " + this.resultado);
  }
}
