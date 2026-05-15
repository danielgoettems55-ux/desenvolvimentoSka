export abstract class Personagem {
  public nome: string = "Personagem";
  protected vida: number = 0;
  public vidaMaxima: number = 0;
  protected dano: number = 0;
  protected regen: number = 0;
  private jaUsouCura: boolean = false;
  protected imagem: string = "";
  protected megaImg: string = "";
  private jaMegaEvoluiu: boolean = false;
  protected imgMorte = "./public/morte.PNG";
  constructor(
    nome: string,
    vida: number,
    dano: number,
    regen: number,
    imagem: string,
    megaImg: string,
  ) {
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.regen = regen;
    this.imagem = imagem;
    this.vidaMaxima = vida;
    this.megaImg = megaImg;
  }

  isVivo(): boolean {
    return this.vida > 0;
  }
  public abstract atacar(persona: Personagem): void;

  sofrerAtaque(dano: number): void {
    this.vida = Math.max(0, this.vida - dano);
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

  public setImg(image: string) {
    this.imagem = image;
  }

  public morto() {
    this.setImg(this.imgMorte);
  }

  gerarAtaque(): number {
    let maximoAtk = 4;
    return Math.floor(Math.random() * maximoAtk);
  }

  public podeCurar() {
    return !this.jaUsouCura;
  }

  public podeMegaEvoluir() {
    return !this.jaMegaEvoluiu;
  }

  public gerarNumeroMegaEvolucao() {
    let maximoNum = 20;
    return Math.floor(Math.random() * maximoNum);
  }
 
  public megaEvolucao(vida: number, dano: number, vidaMax: number) {
    let numero_aleatorio = this.gerarNumeroMegaEvolucao();

    if (numero_aleatorio == 3) {
      this.setImg(this.megaImg);
      this.alterarStatusMegaEvo(vida, dano, vidaMax);
      this.megaEvoluiu("game");
      this.jaMegaEvoluiu = true;
    }
  }

  public alterarStatusMegaEvo(vida: number, dano: number, vidaMax: number) {
    this.vida = vida;
    this.dano = dano;
    this.vidaMaxima = vidaMax;
  }

  public log(mensagem: string) {
    document.getElementById("console")!.innerHTML += "<p>" + mensagem + "<p>";
  }

  public megaEvoluiu(id: string) {
    (document.getElementById(id) as HTMLElement).classList.add("mega-evolui");
  }
}
