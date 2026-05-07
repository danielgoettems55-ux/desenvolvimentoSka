import { Assasino } from "./Assasino.js";
import { Jogo } from "./Jogo.js";
import { Mago } from "./Mago.js";

let mago: Mago = new Mago("Mago", 500, 20, 30);
let assasino: Assasino = new Assasino("Assasino",500,10,15,15);
let jogo:Jogo = new Jogo();
jogo.inicia(mago,assasino);
/*console.log(assasino.getVida());
mago.atacar(assasino);
console.log(assasino.getVida());*/