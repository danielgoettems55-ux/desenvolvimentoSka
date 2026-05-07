import { Assasino } from "./Assasino.ts";
import { Mago } from "./Mago.ts";
import { Personagem } from "./Personagem.ts";

export class Jogo{
    public async inicia(player1:Personagem, player2:Personagem){
        let turno = 1;
        this.atualizarInterface(player1,player2);
        while(player1.isVivo() && player2.isVivo()){

            if(player1.getVida() < 50 && player1.podeCurar() ){
                player1.recuperarVida();
                this.atualizarInterface(player1,player2);
              
            }

            if(player2.getVida() < 50 && player2.podeCurar()){
                player2.recuperarVida();
                this.atualizarInterface(player1,player2);
               
            }
//*********************************************************************************************************//
            player1.log("\n===========Turno : " + turno+"===========");

            player1.atacar(player2);
            this.atualizarInterface(player1,player2);
            await this.esperaTempo();
            if(!player2.isVivo()){
                break;
            }
            player2.atacar(player1);
            this.atualizarInterface(player1,player2);
            await this.esperaTempo();
            turno++;
        }

        if(player1.isVivo()){
            player1.log(player1.nome +" Ganhou a luta");
        }

        
        if(player2.isVivo()){
            player1.log(player2.nome +" Ganhou a luta");
        }
    }
    buscaComponenteHtml(id:string){
        return document.getElementById(id);
    }

   

    public atualizarInterface(jogadorUm:Personagem, jogadorDois:Personagem){
        (document.getElementById("imgJogadorUm")as HTMLImageElement).src = jogadorUm.getImg();
        (document.getElementById("imgJogadorDois")as HTMLImageElement).src = jogadorDois.getImg();

        this.buscaComponenteHtml("JogadorUmVida")!.textContent = "HP: " + jogadorUm.getVida();
         this.buscaComponenteHtml("JogadorDoisVida")!.textContent = "HP: " + jogadorDois.getVida();
         this.buscaComponenteHtml("NomeUm")!.textContent = "HP: " + jogadorUm.nome;
         this.buscaComponenteHtml("NomeDois")!.textContent = "HP: " + jogadorDois.nome;
    }
    public esperaTempo(){
        const milesegundos =800;
        return new Promise((x) => setTimeout(x,milesegundos));
        
    }
}

function construirJogo(){
    let mago:Mago = new Mago("Mago", 500, 20, 30);
    let assasino:Assasino = new Assasino("Assasino",500,10,15,15);
    let jogo:Jogo = new Jogo();
    jogo.inicia(mago,assasino);
}

document.getElementById("botaoJogar")!.addEventListener("click",construirJogo);