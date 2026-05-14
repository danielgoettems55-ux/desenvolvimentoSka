"use strict";
(() => {
  // src/Personagem.ts
  var Personagem = class {
    constructor(nome, vida, dano, regen, imagem, megaImg) {
      this.nome = "Personagem";
      this.vida = 0;
      this.vidaMaxima = 0;
      this.dano = 0;
      this.regen = 0;
      this.jaUsouCura = false;
      this.imagem = "";
      this.megaImg = "";
      this.jaMegaEvoluiu = false;
      this.imgMorte = "./public/morte.PNG";
      this.nome = nome;
      this.vida = vida;
      this.dano = dano;
      this.regen = regen;
      this.imagem = imagem;
      this.vidaMaxima = vida;
      this.megaImg = megaImg;
    }
    isVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano) {
      this.vida = Math.max(0, this.vida - dano);
    }
    recuperarVida() {
      this.vida = this.vida + this.regen;
      this.jaUsouCura = true;
    }
    getVida() {
      return this.vida;
    }
    setVida(vida) {
      this.vida = vida;
    }
    getImg() {
      return this.imagem;
    }
    setImg(image) {
      this.imagem = image;
    }
    morto() {
      this.setImg(this.imgMorte);
    }
    gerarAtaque() {
      let maximoAtk = 4;
      return Math.floor(Math.random() * maximoAtk);
    }
    podeCurar() {
      return !this.jaUsouCura;
    }
    podeMegaEvoluir() {
      return !this.jaMegaEvoluiu;
    }
    gerarNumeroMegaEvolucao() {
      let maximoNum = 20;
      return Math.floor(Math.random() * maximoNum);
    }
    //Mexi aqui
    megaEvolucao(vida, dano, vidaMax) {
      let numero_aleatorio = this.gerarNumeroMegaEvolucao();
      if (numero_aleatorio == 3) {
        this.setImg(this.megaImg);
        this.alterarStatusMegaEvo(vida, dano, vidaMax);
        this.megaEvoluiu("game");
        this.jaMegaEvoluiu = true;
      }
    }
    alterarStatusMegaEvo(vida, dano, vidaMax) {
      this.vida = vida;
      this.dano = dano;
      this.vidaMaxima = vidaMax;
    }
    log(mensagem) {
      document.getElementById("console").innerHTML += "<p>" + mensagem + "<p>";
    }
    megaEvoluiu(id) {
      document.getElementById(id).classList.add("mega-evolui");
    }
  };

  // src/Assasino.ts
  var Assasino = class extends Personagem {
    constructor(nome, vida, dano, regen, veneno, buff_furia) {
      super(
        nome,
        vida,
        dano,
        regen,
        "./public/assasino.PNG",
        "./public/assasinoMegaEvo.PNG"
      );
      this.veneno = 0;
      this.buff_furia = 0;
      this.veneno = veneno;
      this.buff_furia = buff_furia;
    }
    /*public atacar(persona: Personagem): void {
          this.dano = this.verificarAtaque(this.gerarAtaque());
          console.log("O " + this.nome + " atacou o "+ persona.nome + " e causou "+(this.dano + this.veneno) + " de dano\nVida ");
          persona.sofrerAtaque(this.dano + this.veneno);
          console.log(persona.nome +" = " + persona.getVida());
      }*/
    atacar(persona) {
      let ataque_base = this.dano;
      let dado = this.gerarAtaque();
      let msg = "Ataque Base";
      if (this.vida < 100) {
        switch (dado) {
          case 1:
            ataque_base += 30;
            ataque_base += this.buff_furia;
            msg = "Ataque Enfurecido de Machado";
            break;
          case 2:
            ataque_base += 40;
            msg = "Ataque Enfurecido de Ma\xE7a";
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
            msg = "Ma\xE7a";
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
        "O " + this.nome + " atacou o " + persona.nome + " com " + msg + " e causou " + (ataque_base + this.veneno) + " de dano\n "
      );
      persona.sofrerAtaque(ataque_base + this.veneno);
      this.log("Vida " + persona.nome + " = " + persona.getVida());
    }
    defesa(dano) {
      return dano * 90 / 100;
    }
    sofrerAtaque(dano) {
      this.vida = Math.max(0, this.vida - this.defesa(dano));
    }
  };

  // src/Mago.ts
  var Mago = class extends Personagem {
    constructor(nome, vida, dano, regen) {
      super(
        nome,
        vida,
        dano,
        regen,
        "./public/mago.PNG",
        "./public/magoMegaEvo.PNG"
      );
    }
    /* public atacar(persona: Personagem): void {
          this.dano = this.verificarAtaque(this.gerarAtaque());
         console.log("O " + this.nome + " atacou o "+persona.nome + " e causou "+this.dano+ " de dano\nVida ");
          persona.sofrerAtaque(this.dano);
          console.log(persona.nome +" = " + persona.getVida());
      }*/
    atacar(persona) {
      let ataque_base = this.dano;
      let dado = this.gerarAtaque();
      let msg = "feiti\xE7o base";
      switch (dado) {
        case 1:
          ataque_base += 35;
          msg = "Bola de Fogo";
          break;
        case 2:
          ataque_base += 40;
          msg = "Rel\xE2mpago";
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
        "O " + this.nome + " atacou o " + persona.nome + " com o feiti\xE7o: " + msg + " e causou " + ataque_base + " de dano"
      );
      persona.sofrerAtaque(ataque_base);
      this.log("Vida" + persona.nome + " = " + persona.getVida());
    }
  };

  // src/Jogo.ts
  var Jogo = class {
    async inicia(player1, player2) {
      let turno = 1;
      this.atualizarInterface(player1, player2);
      while (player1.isVivo() && player2.isVivo()) {
        if (player1.getVida() < 100 && player1.podeCurar()) {
          player1.recuperarVida();
          this.atualizarInterface(player1, player2);
          await this.esperaTempo();
        }
        if (player2.getVida() < 100 && player2.podeCurar()) {
          player2.recuperarVida();
          this.atualizarInterface(player1, player2);
          await this.esperaTempo();
        }
        player1.log("\n<{===========Turno : " + turno + "===========}>");
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
        this.limpaDano("imgJogadorUm");
        if (player1.nome == "Mago") {
          if (player1.podeMegaEvoluir()) {
            player1.megaEvolucao(600, 30, 600);
          }
        } else {
          if (player1.podeMegaEvoluir()) {
            player1.megaEvolucao(700, 25, 700);
          }
        }
        if (player2.nome == "Mago") {
          if (player2.podeMegaEvoluir()) {
            player2.megaEvolucao(600, 30, 600);
            this.atualizarInterface(player1, player2);
          }
        } else {
          if (player2.podeMegaEvoluir()) {
            player2.megaEvolucao(700, 25, 700);
            this.atualizarInterface(player1, player2);
          }
        }
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
        turno++;
      }
      if (player1.isVivo()) {
        player2.morto();
        this.atualizarInterface(player1, player2);
        player1.log(player1.nome + " Ganhou a luta");
      }
      if (player2.isVivo()) {
        player1.morto();
        this.atualizarInterface(player1, player2);
        player1.log(player2.nome + " Ganhou a luta");
      }
    }
    buscaComponenteHtml(id) {
      return document.getElementById(id);
    }
    tomouDano(id) {
      document.getElementById(id).classList = "tamanhoImagem dano";
    }
    limpaDano(id) {
      document.getElementById(id).classList = "tamanhoImagem";
    }
    atualizarInterface(jogadorUm, jogadorDois) {
      document.getElementById("imgJogadorUm").src = jogadorUm.getImg();
      document.getElementById("imgJogadorDois").src = jogadorDois.getImg();
      this.buscaComponenteHtml("JogadorUmVida").textContent = "HP: " + jogadorUm.getVida();
      this.buscaComponenteHtml("JogadorDoisVida").textContent = "HP: " + jogadorDois.getVida();
      this.buscaComponenteHtml("NomeUm").textContent = "HP: " + jogadorUm.nome;
      this.buscaComponenteHtml("NomeDois").textContent = "HP: " + jogadorDois.nome;
      let divBarraVida = this.buscaComponenteHtml(
        "jogadorUmVidaPorcentagem"
      );
      divBarraVida.style.width = jogadorUm.getVida() * 100 / jogadorUm.vidaMaxima + "%";
      let divBarraVidaDois = this.buscaComponenteHtml(
        "jogadorDoisVidaPorcentagem"
      );
      divBarraVidaDois.style.width = jogadorDois.getVida() * 100 / jogadorDois.vidaMaxima + "%";
    }
    esperaTempo() {
      const milesegundos = 800;
      return new Promise((x) => setTimeout(x, milesegundos));
    }
  };

  // src/TrocadePersonagem.ts
  var TrocadePersonagem = class {
    trocarPlayer1() {
      const selected = document.querySelector(
        'input[name="play1"]:checked'
      );
      if (selected?.value == "1") {
        return this.player1 = new Mago("Mago", 500, 20, 100);
      }
      if (selected?.value == "2") {
        return this.player1 = new Assasino("Assasino", 500, 10, 15, 15, 10);
      }
      throw new Error("Selecione um personagem para Player 1");
    }
    trocarPlayer2() {
      const selected = document.querySelector(
        'input[name="play2"]:checked'
      );
      if (selected?.value == "1") {
        return this.player2 = new Mago("Mago", 500, 20, 30);
      }
      if (selected?.value == "2") {
        return this.player2 = new Assasino("Assasino", 600, 10, 15, 15, 10);
      }
      throw new Error("Selecione um personagem para Player 2");
    }
  };
  function construirJogo() {
    const troca = new TrocadePersonagem();
    let playerUm = troca.trocarPlayer1();
    let playerDois = troca.trocarPlayer2();
    document.getElementById("selecao").style.display = "none";
    document.getElementById("game").style.display = "block";
    let jogo = new Jogo();
    jogo.inicia(playerUm, playerDois);
  }
  document.getElementById("game").style.display = "none";
  document.getElementById("jogar")?.addEventListener("click", construirJogo);
})();
