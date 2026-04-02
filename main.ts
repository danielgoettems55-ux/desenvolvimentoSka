import { Aluno } from "./Aluno.ts";
import { Pessoa } from "./Pessoa.ts";
import { Professor } from "./Professor.ts";
import { Produto } from "./Produto.ts";

/*let pessoaUm = new Pessoa("Daniel", 17, "12345678", "Masculino");
pessoaUm.exibirInfo();
pessoaUm.nome = "Joao";
pessoaUm.exibirInfo();
pessoaUm.falar();*/

let produto = new Produto("12345da","Ovo",15.55);

console.log(produto.getCodigo());

produto.setCodigo("Daniel");

console.log(produto.getCodigo());
