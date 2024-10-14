import fs from 'fs';
import path from 'path';


const write = async () => {
    const writableStream = await fs.createWriteStream(path.join(import.meta.dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writableStream);

    writableStream.on('error', (err) => {
        console.error('Error writing to file:', err);
    });

    writableStream.on('finish', () => {
        console.log('Данные успешно записаны в файл.');
    });

    process.stdin.on('end', () => {
        writableStream.end();
    });

};

await write();