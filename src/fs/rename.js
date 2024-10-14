import asyncFs from "fs/promises";
import path from "path";

const fileToRenamePath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt')
const renamedFilePath = path.join(import.meta.dirname, 'files', 'properFilename.md')

const rename = async () => {
    try {
        await Promise.all([
            asyncFs.access(fileToRenamePath).catch((e) => {
                throw new Error('FS operation failed: wrongFilename.txt does not exist');
            }),
            await asyncFs.access(renamedFilePath)
                .catch(e => {
                    //если его не существует то ошибка не прокидывается
                    if (e.code !== 'ENOENT') {
                        throw e
                    }
                })
        ])
        await asyncFs.rename(fileToRenamePath, renamedFilePath)
    } catch (e) {
        console.error(e)
    }

};

await rename();