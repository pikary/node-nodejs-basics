import fs from 'fs';
import path from "path";


const read = async () => {
    try {
        const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
        const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

        readStream.on('readable', () => {
            let chunk
            while (null !== (chunk = readStream.read())) {
                process.stdout.write(chunk);
            }
        });

        readStream.on('error', (err) => {
            throw err
        })

        readStream.on('end', () => {
            console.log('\nFile read completed');
        });

    } catch (e) {
        console.error(e);
    }
};

await read();
