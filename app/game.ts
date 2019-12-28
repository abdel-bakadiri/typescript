import { Result } from './result';
import { Player } from './player';
import { ScoreBoard as ResltPanel } from './scoreboard';
import {  getValueFromInHtml as utilities  } from './utility';

export class Game {
  private scoreBoard = new ResltPanel();
  // use a parameters properties
  constructor(
    public player: Player,
    public probleAcount: number,
    public factor: number
  ) {}
  displayGamme(): void {
    let gameForm: string = " ";
    for (let i = 0; i < this.probleAcount; i++) {
      gameForm += '<div class="form-group">';
      gameForm += '<label  class="col-sm-2 control-label">';
      gameForm += String(this.factor) + " x  " + i + "=</label>";
      gameForm +=
        '<div class="col-sm-1"> <input type="text" id= "answer '+i+'" class="form-control" size ="5"/> </div>';
      gameForm += "</div>";
    }
    // add the new game to the page
    const gameElement: HTMLElement = document.getElementById("game")!;
    gameElement.innerHTML = gameForm;

    // enable the claculte score button
    document.getElementById("calculate")!.removeAttribute("disabled");
  }
  calculateScore(): void {
    let score: number = 0;
    for (let i = 0; i < this.probleAcount; i++) {
      const answer: number = Number(utilities("answer "+i ));
      if (i * this.factor === answer) {
        score++;
      }
    }
    // create a new Result to passe to scoreboard
    const resultat: Result = {
      playerName: this.player.namePlayer,
      score: score,
      problemeCount: this.probleAcount,
      factor: this.factor
    };
    // add the result
    this.scoreBoard.addResult(resultat);
    this.scoreBoard.updateScoreBoard();
    // disabled the calculate button
    document.getElementById("calculate")!.setAttribute("disbaled", "true");
  }
}
