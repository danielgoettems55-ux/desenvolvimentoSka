"use strict";
(() => {
  // src/Personagem.ts
  var Personagem = class {
    constructor(nome, vida, dano, regen, imagem) {
      this.nome = "Personagem";
      this.vida = 0;
      this.dano = 0;
      this.regen = 0;
      this.jaUsouCura = false;
      this.imagem = "";
      this.nome = nome;
      this.vida = vida;
      this.dano = dano;
      this.regen = regen;
      this.imagem = imagem;
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
      super(nome, vida, dano, regen, "https://thumbs.dreamstime.com/z/vector-pixel-art-murderer-vector-pixel-art-murderer-isolated-cartoon-114948767.jpg?w=576");
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
      this.log("O " + this.nome + " atacou o " + persona.nome + " com " + msg + " e causou " + (ataque_base + this.veneno) + " de dano\n ");
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
      super(nome, vida, dano, regen, "data:image/jpeg;base64,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");
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
      this.log("O " + this.nome + " atacou o " + persona.nome + " com o feiti\xE7o: " + msg + " e causou " + ataque_base + " de dano");
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
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
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
    atualizarInterface(jogadorUm, jogadorDois) {
      document.getElementById("imgJogadorUm").src = jogadorUm.getImg();
      document.getElementById("imgJogadorDois").src = jogadorDois.getImg();
      this.buscaComponenteHtml("JogadorUmVida").textContent = "HP: " + jogadorUm.getVida();
      this.buscaComponenteHtml("JogadorDoisVida").textContent = "HP: " + jogadorDois.getVida();
      this.buscaComponenteHtml("NomeUm").textContent = "HP: " + jogadorUm.nome;
      this.buscaComponenteHtml("NomeDois").textContent = "HP: " + jogadorDois.nome;
    }
    esperaTempo() {
      const milesegundos = 800;
      return new Promise((x) => setTimeout(x, milesegundos));
    }
  };
  function construirJogo() {
    let mago = new Mago("Mago", 500, 20, 30);
    let assasino = new Assasino("Assasino", 500, 10, 15, 15);
    let jogo = new Jogo();
    jogo.inicia(mago, assasino);
  }
  document.getElementById("botaoJogar").addEventListener("click", construirJogo);
})();
