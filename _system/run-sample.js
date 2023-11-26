import { spawn } from "node:child_process";

const fileName = "./sample.ts";

// Adjust the path to the Prettier binary as needed
const prettierPath = "./../bin/prettier.js";

const prettier = spawn("node", [prettierPath, fileName]);

prettier.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

prettier.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

prettier.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
