import {spawn} from 'child_process';
import path from "path";


const scriptFile = path.join(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptFile, ...args],
        {
            stdio: ['pipe', 'pipe', 'pipe', 'ipc']
        }
    );
    // то что залогится в процессе будет передавать в поток write nodejs
    childProcess.stdout.pipe(process.stdout);
    // то что мы пишем в cmd передается в инпут стрим процесса
    process.stdin.pipe(childProcess.stdin);
    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2]);
