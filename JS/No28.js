// fibo

const prompt = require('prompt-sync')({ sigint: true });

let n = parseInt(prompt('Enter n: ', String));
let f0 = 0, f1 = 1;
let count = 1;
while (count <= n) {
    console.log(f1);
    let f = f0 + f1;
    f0 = f1;
    f1 = f;
    count++;
}