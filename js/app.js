"use strict";
var Player = (function () {
    function Player() {
        var _this = this;
        this.namePlayer = "";
        this.logPlayer = function () { return console.log(_this.namePlayer); };
    }
    return Player;
}());
var ScoreBoard = (function () {
    function ScoreBoard() {
        var _this = this;
        this.results = [];
        this.addResult = function (newResult) { return _this.results.push(newResult); };
    }
    ScoreBoard.prototype.updateScoreBoard = function () {
        var outPutBoard = "<h2>Scorboard</h2>";
        for (var i = 0; i < this.results.length; i++) {
            var result = this.results[i];
            outPutBoard += "<h4>";
            outPutBoard += "resultat play name : " + result.score + "/" + result.problemeCount + " for factor " + result.factor;
            outPutBoard += "</h4>";
        }
        var scoreElement = document.getElementById('scores');
        scoreElement.innerHTML = outPutBoard;
    };
    return ScoreBoard;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (idInputElement) {
        var htmlInputElment = document.getElementById(idInputElement);
        return htmlInputElment.value;
    };
    return Utility;
}());
var Game = (function () {
    function Game(player, probleAcount, factor) {
        this.player = player;
        this.probleAcount = probleAcount;
        this.factor = factor;
        this.scoreBoard = new ScoreBoard();
    }
    Game.prototype.displayGamme = function () {
        var gameForm = " ";
        for (var i = 0; i < this.probleAcount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label  class="col-sm-2 control-label">';
            gameForm += String(this.factor) + " x  " + i + "=</label>";
            gameForm +=
                '<div class="col-sm-1"> <input type="text" id= "answer ' + i + '" class="form-control" size ="5"/> </div>';
            gameForm += "</div>";
        }
        var gameElement = document.getElementById("game");
        gameElement.innerHTML = gameForm;
        document.getElementById("calculate").removeAttribute("disabled");
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 0; i < this.probleAcount; i++) {
            var answer = Number(Utility.getInputValue("answer " + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var resultat = {
            playerName: this.player.namePlayer,
            score: score,
            problemeCount: this.probleAcount,
            factor: this.factor
        };
        this.scoreBoard.addResult(resultat);
        this.scoreBoard.updateScoreBoard();
        document.getElementById("calculate").setAttribute("disbaled", "true");
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.namePlayer = Utility.getInputValue('playername');
    var problemAccount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemAccount, factor);
    newGame.displayGamme();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map