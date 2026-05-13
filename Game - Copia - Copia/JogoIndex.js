"use strict";
(() => {
  // src/Personagem.ts
  var Personagem = class {
    constructor(nome, vida, dano, regen, imagem) {
      this.nome = "Personagem";
      this.vida = 0;
      this.vidaMaxima = 0;
      this.dano = 0;
      this.regen = 0;
      this.jaUsouCura = false;
      this.imagem = "";
      this.nome = nome;
      this.vida = vida;
      this.dano = dano;
      this.regen = regen;
      this.imagem = imagem;
      this.vidaMaxima = vida;
    }
    isVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano) {
      this.vida = this.vida - dano;
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
    gerarAtaque() {
      let maximoAtk = 4;
      return Math.floor(Math.random() * maximoAtk);
    }
    verificarAtaque(ataque) {
      if (ataque == 0) {
        return 15;
      } else if (ataque == 1) {
        return 20;
      } else {
        return 30;
      }
    }
    podeCurar() {
      return !this.jaUsouCura && this.vida < 50;
    }
    log(mensagem) {
      document.getElementById("console").innerHTML += "<p>" + mensagem + "<p>";
    }
  };

  // src/Assasino.ts
  var Assasino = class extends Personagem {
    constructor(nome, vida, dano, regen, veneno) {
      super(
        nome,
        vida,
        dano,
        regen,
        "./public/assasino.PNG"
      );
      this.veneno = 0;
      this.veneno = veneno;
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
      let msg = "feiti\xE7o base";
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
      this.vida = this.vida - this.defesa(dano);
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
        "./public/mago.PNG"
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
          ataque_base += 20;
          msg = "bola de fogo";
          break;
        case 2:
          ataque_base += 30;
          msg = "ralampago";
          break;
        case 3:
          ataque_base += 50;
          msg = "Decaimento";
          break;
        default:
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
        if (player1.getVida() < 50 && player1.podeCurar()) {
          player1.recuperarVida();
          this.atualizarInterface(player1, player2);
        }
        if (player2.getVida() < 50 && player2.podeCurar()) {
          player2.recuperarVida();
          this.atualizarInterface(player1, player2);
        }
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
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
        turno++;
      }
      if (player1.isVivo()) {
        player1.log(player1.nome + " Ganhou a luta");
      }
      if (player2.isVivo()) {
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
        return this.player1 = new Mago("Mago", 500, 20, 30);
      }
      if (selected?.value == "2") {
        return this.player1 = new Assasino("Assasino", 500, 10, 15, 15);
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
        return this.player2 = new Assasino("Assasino", 500, 10, 15, 15);
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
