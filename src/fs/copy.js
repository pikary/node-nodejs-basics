import fs from 'fs/promises';
import path from "path";


const filesPath = path.join(import.meta.dirname,'files')
const copyFilesPath = path.join(import.meta.dirname,'files_copy')


const copy = async () => {
    try{
        await Promise.all([
            fs.access(filesPath),
            fs.access(copyFilesPath).then(() => {
                throw new Error('FS operation failed'); // отправляется ошибка если файл уже скопирован
            }).catch(err => {
                if (err.code !== 'ENOENT') throw err; // тоесть при ошибке вызванной при не нахождении файда - игрорим
            })
        ]);
        await fs.cp(filesPath,copyFilesPath,{recursive:true} )
        console.log('Files copied successfully.');
    }catch (e){
        console.error(e)
    }
};

await copy();
