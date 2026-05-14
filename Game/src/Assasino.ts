import { Personagem } from "./Personagem";
export class Assasino extends Personagem {
  veneno: number = 0;
  buff_furia: number = 0;
  constructor(
    nome: string,
    vida: number,
    dano: number,
    regen: number,
    veneno: number,
    buff_furia: number,
  ) {
    super(
      nome,
      vida,
      dano,
      regen,
      "./public/assasino.PNG",
      "./public/assasinoMegaEvo.PNG",
    );
    this.veneno = veneno;
    this.buff_furia = buff_furia;
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
    let msg: string = "Ataque Base";

    if (this.vida < 100) {
      switch (dado) {
        case 1:
          ataque_base += 30;
          ataque_base += this.buff_furia;
          msg = "Ataque Enfurecido de Machado";
          break;

        case 2:
          ataque_base += 40;
          msg = "Ataque Enfurecido de Maça";
          break;

        case 3:
          ataque_base += 50;
          msg = "Ataque Enfurecido de Bazuca";
          break;

        default:
          break;
      }
    } else {
      switch (dado) {
        case 1:
          ataque_base += 30;
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
          break;
      }
    }
    this.log(
      "O " +
        this.nome +
        " atacou o " +
        persona.nome +
        " com " +
        msg +
        " e causou " +
        (ataque_base + this.veneno) +
        " de dano\n ",
    );
    persona.sofrerAtaque(ataque_base + this.veneno);
    this.log("Vida " + persona.nome + " = " + persona.getVida());
  }

  public defesa(dano: number): number {
    return (dano * 90) / 100;
  }

  override sofrerAtaque(dano: number): void {
    this.vida = Math.max(0, this.vida - this.defesa(dano));
  }
}
