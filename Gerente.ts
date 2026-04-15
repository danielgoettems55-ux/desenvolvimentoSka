import { Funcionario } from "./Funcionario.ts";

export class Gerente extends Funcionario{
    cargo:string = "gerente";
    
  
    constructor(nome:string,salario:number){
        super(nome,salario);
        
    }

    override falar(): void {
        console.log("B");
    }

    ganharAumento(salarioAtual:number, aumento: number): string {
        return ("Seu salario com aumento é: " + (aumento+salarioAtual));
    }
    
}