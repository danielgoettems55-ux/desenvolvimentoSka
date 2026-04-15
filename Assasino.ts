import { Personagem } from "./Personagem.ts";

export class Assasino extends Personagem{
    veneno:number = 0;
    constructor(nome:string,vida:number,dano:number,regen:number,veneno:number){
        super(nome,vida,dano,regen);
        this.veneno = veneno;
    }
    /*public atacar(persona: Personagem): void {
        this.dano = this.verificarAtaque(this.gerarAtaque());
        console.log("O " + this.nome + " atacou o "+ persona.nome + " e causou "+(this.dano + this.veneno) + " de dano\nVida ");
        persona.sofrerAtaque(this.dano + this.veneno);
        console.log(persona.nome +" = " + persona.getVida());
    }*/

        public atacar(persona: Personagem): void {
        let ataque_base = this.dano;
        let dado = this.gerarAtaque();
        let msg:string = "feitiço base";

        switch (dado) {
            case 1:
                ataque_base += 50;
                msg = "Machado";
                break;

             case 2:
                ataque_base += 40;
                msg = "Maça";
                break;
            
            case 3:
                ataque_base += 50;
                msg = "Bazuca";
                break;
        
            default:
                console.log("O " + this.nome + " atacou o "+ persona.nome +" com " + msg + " e causou "+(ataque_base + this.veneno) + " de dano\n ");
        persona.sofrerAtaque(ataque_base+this.veneno);
        console.log("Vida " + persona.nome +" = " + persona.getVida());
                break;
        }

        
    }

    public defesa(dano:number):number{
        return (dano * 90) / 100;
    }

    override sofrerAtaque(dano: number): void {
        this.vida = this.vida - this.defesa(dano);
    }
    
}