import asyncFs from "fs/promises";
import path from "path";

const fileToDeletePath = path.join(import.meta.dirname,'files','fileToRemove.txt')

const remove = async () => {
    try {
        await asyncFs.rm(fileToDeletePath, { recursive: false, force: false });
        console.log('File removed successfully');
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed: fileToRemove.txt does not exist');
        } else {
            throw e;
        }
    }
};



await remove();


// await remove();