export abstract class Pessoa {
  readonly nome: string;
  protected idade: number;
  protected cpf: string;
  protected genero: string;

  constructor(nome: string, idade: number, cpf: string, genero: string) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.genero = genero;
  }

  /*public setNome(nome:string){
    this.nome = nome;
  }*/

    public setIdade(idade:number){
    this.idade = idade;
  }
    public setCpf(cpf:string){
    this.cpf = cpf;
  }
    public setGenero(genero:string){
    this.genero = genero;
  }

    getNome(){
      return this.nome;
    }

    
    getIdade(){
      return this.idade;
    }
    
    getCpf(){
      return this.cpf;
    }
    
    getGenero(){
      return this.genero;
    }
  falar() {
    console.log("Ola");
  }

  exibirInfo() {
    console.log("Nome: " + this.nome);
    console.log("Idade: " + this.idade);
    console.log("cpf: " +this.cpf);
    console.log("genero: " +this.genero);
  }
}