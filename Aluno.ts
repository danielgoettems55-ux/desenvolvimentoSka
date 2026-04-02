import { Pessoa } from "./Pessoa.ts";

export class Aluno extends Pessoa{
    private nota:number = 0;

    constructor(nota:number, nome: string, idade: number, cpf: string, genero: string){
        super(nome, idade, cpf, genero);

        this.nota = nota;
       
    }

    setNota(nota:number){
        this.nota = nota;
    }

    exibeNota(){

    }

    /* exibirInfo() {
    console.log("Nome: " + this.nome);
    console.log("Nota: " + this.nota);
    console.log("Idade: " + this.idade);
    console.log("cpf: " +this.cpf);
    console.log("genero: " +this.genero);
  }*/

  exibirInfoAluno(){
    this.exibirInfo();
    console.log("nota: " + this.nota);
  }
}