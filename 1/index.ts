import fs from 'fs';
export default function test(){
    const data = fs.readFileSync('1/input.txt', { encoding: 'utf-8'});
    let lastCalories = 0;
    const totalCalories: number[]  = []
    data.split('\n').forEach((line)=>{
        if(line != ''){
            lastCalories += Number.parseInt(line);
        }else{
            totalCalories.push(lastCalories);
            lastCalories = 0;
        }
    })
    console.log(totalCalories.sort((a,b) => b-a).reduce((sum, a, i)=> i < 3 ?  sum + a : sum))
}