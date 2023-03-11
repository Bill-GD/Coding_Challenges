const prompt = require('prompt-sync')({ sigint: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log("Enter 'fizz' for numbers divisible by 3\n\
      'buzz' for numbers divisible by 5\n\
      'fizz buzz' for numbers satisfy both requirements");

let count = 1, gameover = false;
async function main() {
    while (!gameover) {
        if (count % 3 !== 0 && count % 5 !== 0)
            console.log(count);
        else {
            let input = prompt('Answer: ', String);
            if (count % 3 === 0 && count % 5 !== 0 && input !== "fizz") gameover = true;
            if (count % 3 !== 0 && count % 5 === 0 && input !== "buzz") gameover = true;
            if (count % 3 === 0 && count % 5 === 0 && input !== 'fizz buzz')
                gameover = true;
        }
        if (gameover) break;
        count++;
        await sleep(500);
    }
    console.log(`Wrong answer.
Correct answer: ${count % 3 === 0 && count % 5 === 0 ? 'fizz buzz' :
            count % 5 !== 0 ? 'fizz' :
                count % 3 !== 0 ? 'buzz' : ''}`)
}

main();