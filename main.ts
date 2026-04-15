import { Assasino } from "./Assasino.ts";
import { Jogo } from "./jogo.ts";
import { Mago } from "./Mago.ts";

let mago: Mago = new Mago("Mago", 100, 20, 30);
let assasino: Assasino = new Assasino("Assasino",100,10,15,15);
let jogo:Jogo = new Jogo();
jogo.inicia(mago,assasino);
/*console.log(assasino.getVida());
mago.atacar(assasino);
console.log(assasino.getVida());*/