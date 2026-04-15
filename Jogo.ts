import { Personagem } from "./Personagem.ts";

export class Jogo{

    public inicia(player1:Personagem, player2:Personagem){
        let turno = 1;
        while(player1.isVivo() && player2.isVivo()){

            if(player1.getVida() < 50 && player1.podeCurar() ){
                player1.recuperarVida();
            }

            if(player2.getVida() < 50 && player2.podeCurar()){
                player2.recuperarVida();
            }
//*********************************************************************************************************//
            console.log("\nTurno : " + turno);

            player1.atacar(player2);
            if(!player2.isVivo()){
                break;
            }
            player2.atacar(player1);
            turno++;
        }

        if(player1.isVivo()){
            console.log(player1.nome +" Ganhou a luta");
        }

        
        if(player2.isVivo()){
            console.log(player2.nome +" Ganhou a luta");
        }
    }
}