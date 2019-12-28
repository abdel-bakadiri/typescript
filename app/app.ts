import { Player } from './player';
import { Game } from './game';
import  * as utilities from './utility';

let newGame: Game;

// add a click handlaer to the button start game
document.getElementById('startGame')!.addEventListener('click', ()=>{
const player: Player = new Player();
player.namePlayer = utilities.getValueFromInHtml('playername');
const problemAccount: number = Number(utilities.getValueFromInHtml('problemCount'));
const factor: number = Number(utilities.getValueFromInHtml('factor'));
newGame = new Game(player, problemAccount, factor);
newGame.displayGamme();
});
//add a click handler to a calculate score button
document.getElementById('calculate')!.addEventListener('click',  () => {
    newGame.calculateScore();
})

