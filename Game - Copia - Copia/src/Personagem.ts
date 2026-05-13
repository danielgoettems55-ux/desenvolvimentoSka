export abstract class Personagem {
  public nome: string = "Personagem";
  protected vida: number = 0;
  public vidaMaxima: number = 0;
  protected dano: number = 0;
  protected regen: number = 0;
  private jaUsouCura: boolean = false;
  protected imagem: string = "";
  constructor(
    nome: string,
    vida: number,
    dano: number,
    regen: number,
    imagem: string,
  ) {
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.regen = regen;
    this.imagem = imagem;
    this.vidaMaxima = vida;
  }

  isVivo(): boolean {
    return this.vida > 0;
  }
  public abstract atacar(persona: Personagem): void;

  sofrerAtaque(dano: number): void {
    this.vida = this.vida - dano;
  }
  public recuperarVida(): void {
    this.vida = this.vida + this.regen;
    this.jaUsouCura = true;
  }

  public getVida(): number {
    return this.vida;
  }

  public setVida(vida: number): void {
    this.vida = vida;
  }

  public getImg() {
    return this.imagem;
  }

  gerarAtaque(): number {
    let maximoAtk = 4;
    return Math.floor(Math.random() * maximoAtk);
  }

  verificarAtaque(ataque: number): number {
    if (ataque == 0) {
      return 15;
    } else if (ataque == 1) {
      return 20;
    } else {
      return 30;
    }
  }

  public podeCurar() {
    return !this.jaUsouCura && this.vida < 50;
  }

  public log(mensagem: string) {
    document.getElementById("console")!.innerHTML += "<p>" + mensagem + "<p>";
  }
}
