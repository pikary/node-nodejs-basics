import fs from "fs";
import path from "path";
import zlib from "zlib";
import {promisify} from "util";
import {pipeline} from "stream";


const asyncPipeline = promisify(pipeline)
const asyncDeleteZip = promisify(fs.unlink)

const decompress = async () => {
    try{
        await asyncPipeline(
            fs.createReadStream(path.join(import.meta.dirname,'files','archive.gz')),
            zlib.createUnzip(),
            fs.createWriteStream(path.join(import.meta.dirname,'files','fileToCompress.txt'))
        )
        // await asyncDeleteZip(path.join(import.meta.dirname,'files','archive.gz'))
    }catch (e){
        console.error(e)
    }
};

await decompress();