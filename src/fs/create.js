import  asyncFs  from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(),'src/fs', 'fresh.txt');

const create = async () => {
    try {
        await asyncFs.access(filePath);
        throw new Error('FS operation failed'); //если файл существует то ни надо создавать
    } catch (e) {
        if (e.code === 'ENOENT') {
            const content = 'I am fresh and young';
            await asyncFs.writeFile(filePath, content);
            console.log('File created');
        }else{
            throw e
        }
    }
};

await create();