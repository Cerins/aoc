import fs from 'fs';
function A(){
    const data = fs.readFileSync('7/input.txt', { encoding: 'utf-8'});
    type Folder = {
        size: number;
        paths: string[]
    }
    const folderSizes: Record<string,  Folder> = {

    }
    const currentFolder: string[] = [];
    data.split('\n').forEach((line)=>{
        if(line === '$ ls') return;
        if(line.startsWith('$ cd')){
            const to = line.split(' ')[2];
            if(to === '..'){
                currentFolder.pop();
            }else{
                currentFolder.push(to);
                const path = currentFolder.join('-');
                folderSizes[path] = {
                    size: 0,
                    paths: []
                }
            }
            return;
        }
        if(line.startsWith('dir ')){
            const path = currentFolder.join('-')
            const folder = path + '-' + line.split(' ')[1];
            folderSizes[path].paths.push(folder);
            return;
        }
        const path = currentFolder.join('-')
        folderSizes[path].size += Number.parseInt(line.split(' ')[0])
    })
    const sortFn = (a: Folder, b: Folder) => a.paths.length < b.paths.length
    while(Object.values(folderSizes).some(f=>f.paths.length !== 0)){
        Object.keys(folderSizes).forEach((folder)=>{
            const newDirs: string[] = []
            const dirs = folderSizes[folder].paths;
            dirs.forEach((dir)=>{
                const oF = folderSizes[dir];
                if(oF.paths.length === 0){
                    folderSizes[folder].size+=oF.size
                }else{
                    newDirs.push(dir);
                }
            })
            folderSizes[folder].paths = newDirs;
        })
    }
    let score = 0;
    Object.keys(folderSizes).forEach((key)=>{
        if(folderSizes[key].size <= 100000){
            score += folderSizes[key].size;
        }  
    })
    console.log(score);
}
function B(){
    const data = fs.readFileSync('7/input.txt', { encoding: 'utf-8'});
    type Folder = {
        size: number;
        paths: string[]
    }
    const folderSizes: Record<string,  Folder> = {

    }
    const currentFolder: string[] = [];
    data.split('\n').forEach((line)=>{
        if(line === '$ ls') return;
        if(line.startsWith('$ cd')){
            const to = line.split(' ')[2];
            if(to === '..'){
                currentFolder.pop();
            }else{
                currentFolder.push(to);
                const path = currentFolder.join('-');
                folderSizes[path] = {
                    size: 0,
                    paths: []
                }
            }
            return;
        }
        if(line.startsWith('dir ')){
            const path = currentFolder.join('-')
            const folder = path + '-' + line.split(' ')[1];
            folderSizes[path].paths.push(folder);
            return;
        }
        const path = currentFolder.join('-')
        folderSizes[path].size += Number.parseInt(line.split(' ')[0])
    })
    while(Object.values(folderSizes).some(f=>f.paths.length !== 0)){
        Object.keys(folderSizes).forEach((folder)=>{
            const newDirs: string[] = []
            const dirs = folderSizes[folder].paths;
            dirs.forEach((dir)=>{
                const oF = folderSizes[dir];
                if(oF.paths.length === 0){
                    folderSizes[folder].size+=oF.size
                }else{
                    newDirs.push(dir);
                }
            })
            folderSizes[folder].paths = newDirs;
        })
    }
    const sortFn = (a: Folder, b: Folder) => a.size > b.size ? 1 : -1
    const maxSize = 70000000;
    const needed = 30000000;
    const items = Object.values(folderSizes).sort(sortFn);
    console.log(items)
    const usedSpace = items[items.length - 1].size;
    const freeSpace = maxSize - usedSpace;
    for(let i =0;i<items.length;i++){
       if(freeSpace + items[i].size >= needed){
        console.log(items[i].size)
        break;
       } 
    }
}

export default B;