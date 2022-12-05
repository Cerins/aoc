import fs from 'fs'
// Rock paper scissors

type OpMove = "A" | "B" | "C"
type MyMove = "X" | "Y" | "Z"

function roundScore(a: OpMove, b: MyMove){
   if(b === 'X'){
        if(a === 'A'){
            return 3;
        }
        if(a === 'C'){
            return 6;
        }
   }
   if(b === 'Y'){
        if(a === 'B'){
            return 3;
        }
        if(a === 'A'){
            return 6;
        }
   }
   if(b === 'Z'){
        if(a === 'C'){
            return 3;
        }
        if(a === 'B'){
            return 6;
        }

   }
   return 0;
}
function shapeScore(a: MyMove) {
    if(a === 'X'){
        return 1;
    }
    if(a === 'Y'){
        return 2;
    }
    if(a === 'Z'){
        return 3;
    }
    throw new Error(`Unknown shape ${a}`);
}

function dayTwoA(){
    const data = fs.readFileSync('2/input.txt', { encoding: 'utf-8'});
    let score = 0;
    data.split('\n').forEach((line)=>{
        if(line === '') return;
        const items = line.split(' ');
        const opponentMove = items[0] as OpMove;
        const myMove = items[1] as MyMove;
        score += shapeScore(myMove) + roundScore(opponentMove, myMove);
    })
    console.log(score);
}
function dayTwoB(){
    const data = fs.readFileSync('2/input.txt', { encoding: 'utf-8'});
    let score = 0;
    const map: {
        X: 0,
        Y: 3,
        Z: 6
    } = {
        X: 0,
        Y: 3,
        Z: 6
    }
    data.split('\n').forEach((line)=>{
        if(line === '') return;
        const items = line.split(' ');
        /*
        X means you need to lose,
        Y means you need to end the round in a draw,
        Z means you need to win
        */
        const opponentMove = items[0] as OpMove;
        const objective = items[1] as MyMove;
        const desiredOutcome = map[objective];
        (['X', 'Y', 'Z'] as MyMove[]).forEach((myMove)=>{
           const rS = roundScore(opponentMove, myMove);
           if(rS === desiredOutcome){
                score+= shapeScore(myMove) + rS;
           }
        })
    })
    console.log(score);
}

export default dayTwoB;