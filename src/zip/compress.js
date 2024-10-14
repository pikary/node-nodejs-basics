import {pipeline} from 'stream'
import {promisify} from 'util'
import path from "path";
import fs from 'fs'
import zlib from 'zlib'


const asyncPipeline = promisify(pipeline);
const asyncDeleteFile = promisify(fs.unlink)

const compress = async () => {
    try{
        await asyncPipeline(
            fs.createReadStream(path.join(import.meta.dirname,'files','fileToCompress.txt')),
            zlib.createGzip(),
            fs.createWriteStream(path.join(import.meta.dirname,'files','archive.gz'))
        )
        //после архвации удалить файл
        // await asyncDeleteFile(path.join(__dirname,'files','fileToCompress.txt'))
    }catch (e){
        console.error(e)
    }
};

await compress();