import fs from 'fs';


function calculateScore(char: string){
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const s = char.charCodeAt(0);
    if( s>=A && s<= Z){
        return s-A+27;
    }
    if( s>= a && s<= z){
        return s-a+1;
    }
    throw new Error(`Unknown char ${char}`)
}

function A(){
    const data = fs.readFileSync('3/input.txt', { encoding: 'utf-8'});
    let score = 0;
    data.split('\n').forEach((line)=>{
        if(line === '') return;
        const elementLookup = new Map<string, boolean>();
        console.log(line);
        for(let i=0;i<line.length/2;i++){
            elementLookup.set(line[i], true);
        }
        for(let i=line.length/2;i<line.length;i++){
            if(elementLookup.has(line[i])){
                elementLookup.delete(line[i])
                score += calculateScore(line[i]);
            }
        }
    })
    console.log(score);

}
function B(){
    const data = fs.readFileSync('3/input.txt', { encoding: 'utf-8'});
    let score = 0;
    const lines = data.split('\n');
    for(let j=0;j<lines.length;j+=3){
        if(lines[j] === '') continue;
        const elementLookup = new Array<number>(255).fill(0);
        const current = lines.slice(j, j+3);
        current.forEach((line, i)=>{
            [...line].forEach((c)=>{
                const code = c.charCodeAt(0);
                if(elementLookup[code] ===i){
                    elementLookup[code]++;
                }
            })
        })
        const badge = String.fromCharCode(elementLookup.indexOf(3));
        score += calculateScore(badge);
    }
    console.log(score);
}

export default B;