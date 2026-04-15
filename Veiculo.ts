export class Veiculo{
    public marca:string;
    public velocidade:number = 0;
    constructor(marca:string, velocidade:number){
        this.marca= marca;
        this.velocidade = velocidade;

    }

    acelerar(velocidade:number){
        this.velocidade += velocidade;
    }

    exibirInfo(){
        console.log("Marca "+this.marca);
        console.log("Velocidade "+this.velocidade);
    }


}