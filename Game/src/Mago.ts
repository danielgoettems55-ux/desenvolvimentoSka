import { Personagem } from "./Personagem";

export class Mago extends Personagem {
  constructor(nome: string, vida: number, dano: number, regen: number) {
    super(
      nome,
      vida,
      dano,
      regen,
      "./public/mago.PNG",
      "./public/magoMegaEvo.PNG",
    );
  }
  /* public atacar(persona: Personagem): void {
        this.dano = this.verificarAtaque(this.gerarAtaque());
       console.log("O " + this.nome + " atacou o "+persona.nome + " e causou "+this.dano+ " de dano\nVida ");
        persona.sofrerAtaque(this.dano);
        console.log(persona.nome +" = " + persona.getVida());
    }*/

  public atacar(persona: Personagem) {
    let ataque_base = this.dano;
    let dado = this.gerarAtaque();
    let msg: string = "feitiço base";

    switch (dado) {
      case 1:
        ataque_base += 35;
        msg = "Bola de Fogo";
        break;

      case 2:
        ataque_base += 40;
        msg = "Relâmpago";
        break;

      case 3:
        ataque_base += 50;
        msg = "Decaimento";
        break;

      default:
        msg = "Ataque Base";
        break;
    }
    this.log(
      "O " +
        this.nome +
        " atacou o " +
        persona.nome +
        " com o feitiço: " +
        msg +
        " e causou " +
        ataque_base +
        " de dano",
    );
    persona.sofrerAtaque(ataque_base);
    this.log("Vida" + persona.nome + " = " + persona.getVida());
  }
}
