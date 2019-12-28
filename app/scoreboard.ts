import { Result } from './result';
import * as _ from 'lodash';

 export class ScoreBoard{
    private results:  Result[] = [];
    addResult = (newResult: Result) =>  {
        this.results.push(newResult)
        console.log( _.upperCase(`${newResult.playerName}`));
    };
    updateScoreBoard(): void{
        let outPutBoard = "<h2>Scorboard</h2>";
        for(let i: number = 0; i < this.results.length ;  i++){
            const result = this.results[i];
            outPutBoard += "<h4>";
            outPutBoard +=  `resultat play name : ${result.score}/${result.problemeCount} for factor ${result.factor}`
            outPutBoard += "</h4>";
        }
        const scoreElement: HTMLElement =  <HTMLElement>document.getElementById('scores');
        scoreElement.innerHTML = outPutBoard;

    } 


}