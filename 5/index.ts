import fs from 'fs';
function A(){
    const charMap = new Array<string>(100).fill("");
    const towers = new Array<string[]>(10);
    for(let i =0;i<10;i++){
        towers[i] = new Array<string>()
    }

    const data = fs.readFileSync('5/towers.txt', { encoding: 'utf-8'});
    data.split('\n').forEach((line, i)=>{
        if(i==0){
            for(let j=0;j<line.length;j++){
                if(line[j] !== ' ') charMap[j] = line[j];
            }
            return;
        }
        for(let j=0;j<line.length;j++){
            const res = charMap[j];
            if(res !== '' && line[j] !== ' '){
                const index = Number.parseInt(res);
                towers[index].push(line[j])
            }
        }
    })
    const moves = fs.readFileSync('5/movements.txt', { encoding: 'utf-8'});
    moves.split('\n').forEach((line)=>{
        //console.log(towers.map((tower)=> tower[0] || "").join(""))
        const items = line.split(' ');
        let amount = Number.parseInt(items[0]);
        const origin = Number.parseInt(items[1]);
        const dest = Number.parseInt(items[2]);
        while(amount--){
            const item = towers[origin].shift();
            towers[dest].unshift(item!);
        }
    })
    console.log(towers.map((tower)=> tower[0] || "").join(""))
}

function B(){

    const charMap = new Array<string>(100).fill("");
    const towers = new Array<string[]>(10);
    for(let i =0;i<10;i++){
        towers[i] = new Array<string>()
    }

    const data = fs.readFileSync('5/towers.txt', { encoding: 'utf-8'});
    data.split('\n').forEach((line, i)=>{
        if(i==0){
            for(let j=0;j<line.length;j++){
                if(line[j] !== ' ') charMap[j] = line[j];
            }
            return;
        }
        for(let j=0;j<line.length;j++){
            const res = charMap[j];
            if(res !== '' && line[j] !== ' '){
                const index = Number.parseInt(res);
                towers[index].push(line[j])
            }
        }
    })
    const moves = fs.readFileSync('5/movements.txt', { encoding: 'utf-8'});
    moves.split('\n').forEach((line)=>{
        //console.log(towers.map((tower)=> tower[0] || "").join(""))
        const items = line.split(' ');
        let amount = Number.parseInt(items[0]);
        const origin = Number.parseInt(items[1]);
        const dest = Number.parseInt(items[2]);
        const item =  towers[origin].splice(0, amount);
        towers[dest].unshift(...item);
    })
    console.log(towers.map((tower)=> tower[0] || "").join(""))

}

export default A;
