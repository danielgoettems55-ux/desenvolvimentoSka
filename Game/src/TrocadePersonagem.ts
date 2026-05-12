import { Assasino } from "./Assasino";
import { Mago } from "./Mago";
import { Personagem } from "./Personagem";
import { Jogo } from "./Jogo";

export class TrocadePersonagem {
  public player1: any;
  public player2: any;

  public trocarPlayer1(): Personagem {
    const selected = document.querySelector<HTMLInputElement>(
      'input[name="play1"]:checked',
    );

    if (selected?.value == "1") {
      return (this.player1 = new Mago("Mago", 500, 20, 30));
    }
    if (selected?.value == "2") {
      return (this.player1 = new Assasino("Assasino", 500, 10, 15, 15));
    }
    throw new Error("Selecione um personagem para Player 1");
  }

  public trocarPlayer2(): Personagem {
    const selected = document.querySelector<HTMLInputElement>(
      'input[name="play2"]:checked',
    );
    if (selected?.value == "1") {
      return (this.player2 = new Mago("Mago", 500, 20, 30));
    }
    if (selected?.value == "2") {
      return (this.player2 = new Assasino("Assasino", 500, 10, 15, 15));
    }
    throw new Error("Selecione um personagem para Player 2");
  }
}


function construirJogo() {
  const troca = new TrocadePersonagem();
  let playerUm = troca.trocarPlayer1();
  let playerDois = troca.trocarPlayer2();


  ((document.getElementById("selecao")) as HTMLElement ).style.display = "none";
   ((document.getElementById("game")) as HTMLElement ).style.display = "block";

  let jogo: Jogo = new Jogo();
  jogo.inicia(playerUm, playerDois);

}

 ((document.getElementById("game")) as HTMLElement ).style.display = "none";
document.getElementById("jogar")?.addEventListener("click", construirJogo);