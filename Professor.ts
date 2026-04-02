import type { Aluno } from "./Aluno.ts";
import { Pessoa } from "./Pessoa.ts";

export class Professor extends Pessoa{

constructor(nome: string, idade: number, cpf: string, genero: string){
super(nome, idade, cpf, genero);
}

atribuirNota(aluno:Aluno, nota:number){
    aluno.setNota(nota);
}


}