import fs from 'fs';
function A(){
    const data = fs.readFileSync('6/input.txt', { encoding: 'utf-8'});
    console.log(data);
    for(let i=0;i<data.length-4;i++){
        const set = new Set<string>();
        for(let j=0;j<4;j++){
            set.add(data[i+j]);
        }
        if(set.size === 4){
            console.log(i+4);
            break;
        }
    }
}
function B(){
    const data = fs.readFileSync('6/input.txt', { encoding: 'utf-8'});
    console.log(data);
    for(let i=0;i<data.length-14;i++){
        const set = new Set<string>();
        for(let j=0;j<14;j++){
            set.add(data[i+j]);
        }
        if(set.size === 14){
            console.log(i+14);
            break;
        }
    }
}

export default B;