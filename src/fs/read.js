import asyncFs from "fs/promises";
import path from "path";

const fileToReadPath = path.join(import.meta.dirname,'files', 'fileToRead.txt')

const read = async () => {
    try {
        const data = await asyncFs.readFile(fileToReadPath, 'utf8');
        console.log(`Content of file : ${data} `);
    }catch (e) {
        if(e.code ==='ENOENT'){
            throw new Error('FS operation failed')
        }
        else{
            throw e
        }
    }
};

await read();