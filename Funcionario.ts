export abstract class Funcionario{

    nome:string;
    protected salario:number;

    constructor(nome:string,salario:number){
        this.nome = nome;
        this.salario = salario;
    }

    getNome(){
        return this.nome;
    }

    
    getSalario(){
        return this.salario;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    setSalario(salario:number){
        this.salario = salario;
    }

    falar():void{
        console.log("a");
    }

    abstract ganharAumento(salarioAtual:number,aumento:number):string;

    

}