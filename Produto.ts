export class Produto{
    private codigo:string;
    private descricao:string;
    private valor:number;
    constructor(codigo:string,descricao:string,valor:number){
        this.codigo = codigo;
        this.descricao= descricao;
        this.valor = valor;
    }

    setCodigo(codigo:string){
        this.codigo = codigo;
    }
    
    setDescricao(descricao:string){
        this.descricao = descricao;
    }
    
    setValor(valor:number){
        this.valor = valor;
    }

    getCodigo(){
        return this.codigo;
    }

    getDescricao(){
        return this.descricao;
    }

    getValor(){
        return this.valor;
    }
}