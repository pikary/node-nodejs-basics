import fs from 'fs';
import path from "path";


const read = async () => {
    // Write your code here
    const readStream = fs.createReadStream(path.join(import.meta.dirname, 'files','fileToRead.txt'), {encoding:'utf-8'});
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    })
};

await read();