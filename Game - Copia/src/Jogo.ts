import { Assasino } from "./Assasino";
import { Mago } from "./Mago";
import { Personagem } from "./Personagem";

export class Jogo {
  public async inicia(player1: Personagem, player2: Personagem) {
    let turno = 1;
    this.atualizarInterface(player1, player2);

    while (player1.isVivo() && player2.isVivo()) {
      if (player1.getVida() < 50 && player1.podeCurar()) {
        player1.recuperarVida();
        this.atualizarInterface(player1, player2);
      }

      if (player2.getVida() < 50 && player2.podeCurar()) {
        player2.recuperarVida();
        this.atualizarInterface(player1, player2);
      }
      //*********************************************************************************************************//
      player1.log("\n===========Turno : " + turno + "===========");

      player1.atacar(player2);
      this.tomouDano("imgJogadorDois");
      this.atualizarInterface(player1, player2);
      await this.esperaTempo();
      this.limpaDano("imgJogadorDois");

      if (!player2.isVivo()) {
        break;
      }
      player2.atacar(player1);
      this.tomouDano("imgJogadorUm");
      this.atualizarInterface(player1, player2);
      await this.esperaTempo();
      turno++;
      this.limpaDano("imgJogadorDois");
    }

    if (player1.isVivo()) {
      player1.log(player1.nome + " Ganhou a luta");
    }

    if (player2.isVivo()) {
      player1.log(player2.nome + " Ganhou a luta");
    }
  }
  buscaComponenteHtml(id: string) {
    return document.getElementById(id);
  }

  public tomouDano(id:string){
    (document.getElementById(id) as HTMLElement).classList = "tamanhoImagem dano";
  }

   public limpaDano(id:string){
    (document.getElementById(id) as HTMLElement).classList = "tamanhoImagem";
  }

  public atualizarInterface(jogadorUm: Personagem, jogadorDois: Personagem) {
    (document.getElementById("imgJogadorUm") as HTMLImageElement).src =
      jogadorUm.getImg();
    (document.getElementById("imgJogadorDois") as HTMLImageElement).src =
      jogadorDois.getImg();

    this.buscaComponenteHtml("JogadorUmVida")!.textContent =
      "HP: " + jogadorUm.getVida();
    this.buscaComponenteHtml("JogadorDoisVida")!.textContent =
      "HP: " + jogadorDois.getVida();
    this.buscaComponenteHtml("NomeUm")!.textContent = "HP: " + jogadorUm.nome;
    this.buscaComponenteHtml("NomeDois")!.textContent =
      "HP: " + jogadorDois.nome;

    let divBarraVida = this.buscaComponenteHtml(
      "jogadorUmVidaPorcentagem",
    ) as HTMLElement;
    
    divBarraVida.style.width =
      (jogadorUm.getVida() * 100) / jogadorUm.vidaMaxima + "%";
  }
  public esperaTempo() {
    const milesegundos = 800;
    return new Promise((x) => setTimeout(x, milesegundos));
  }
}
