import fs from 'fs';

function contains(a: number,b: number, x: number,y: number ){
    if(a <= x && y <= b) return true;
    return false;
}

function overlaps(a : number, b: number, x: number, y: number){
    if(((a < x && a < y) && (b < x && b <y)) || ((a > y && a > x) && (b > x && b > y))) return false
    return true
}

function A(){
    const data = fs.readFileSync('4/input.txt', { encoding: 'utf-8'});
    let score = 0;
    data.split('\n').forEach((line)=>{
        const pairs = line.split(',');
        const p0 = pairs[0];
        const p1 = pairs[1];
        const int0 = p0.split('-')
        const int1 = p1.split('-')
        const a = Number.parseInt(int0[0])
        const b = Number.parseInt(int0[1])
        const x = Number.parseInt(int1[0])
        const y = Number.parseInt(int1[1])
        console.log(pairs)
        const c = (contains(a,b,x,y) || contains(x,y,a,b));
        console.log(a,b,x,y, c);
        score += c ? 1 : 0; 
    })
    console.log(score);
}
function B(){
    const data = fs.readFileSync('4/input.txt', { encoding: 'utf-8'});
    let score = 0;
    data.split('\n').forEach((line)=>{
        const pairs = line.split(',');
        const p0 = pairs[0];
        const p1 = pairs[1];
        const int0 = p0.split('-')
        const int1 = p1.split('-')
        const a = Number.parseInt(int0[0])
        const b = Number.parseInt(int0[1])
        const x = Number.parseInt(int1[0])
        const y = Number.parseInt(int1[1])
        const c = overlaps(a,b,x,y); 
        console.log(a,b,x,y, c);
        score += c ? 1 : 0; 
    })
    console.log(score);
}

export default B;