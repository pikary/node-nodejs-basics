import {Transform} from 'stream';

const transform = async () => {
    process.stdout.write('\nInput your text:\n');
    const transformer = new Transform({
        transform(chunk, encoding, callback) {
            const reversedValue = chunk.toString().split('').reverse().join('');
            callback(null, reversedValue);
        }
    })
    process.stdin.pipe(transformer).pipe(process.stdout);

};

await transform();