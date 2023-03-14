const prompt = require('prompt-sync')({ sigint: true });

const colors = ['White', 'Black', 'Red', 'Yellow', 'Green', 'Blue'];
let maxRound = 0;
let win = false;

const getAllColors = () => colors;

const setRound = () => maxRound = parseInt(prompt(" (?) How many round? -> ", String));

const getPattern = () => {
    let chosenColors = [];
    for (let i = 0; i < 4; i++)
        chosenColors.push(colors[Math.trunc(Math.random() * 6)]);
    return chosenColors;
};

const checkOtherColors = (pattern, color, index) => {
    for (let i = 0; i < pattern.length; i++) {
        if (i === index) continue;
        if (color.toLowerCase() === pattern[i].toLowerCase())
            return true;
    }
    return false;
}

const begin = () => {
    const pattern = getPattern();
    console.log('\nBEGIN\n');
    for (let round = 0; round < maxRound; round++) {
        console.log(`Possible colors: `);
        console.log(getAllColors());
        
        console.log(` (!) Remaining guess: ${maxRound - round}`);
        let correct = 0, misplaced = 0;
        let userColor = [];
        for (let j = 0; j < 4; j++)
            userColor.push(prompt(`Guess color ${j + 1}? -> `, String));

        for (let j = 0; j < userColor.length; j++) {
            if (userColor[j].toLowerCase() === pattern[j].toLowerCase()) correct++;
            else if (checkOtherColors(pattern, userColor[j], j)) misplaced++;
        }
        console.log(`Total correct: ${correct}\nTotal misplaced: ${misplaced}\n`);
        if (correct === 4) {
            win = true;
            break;
        }
    }
    console.log('\t' + (win ? 'You Won!' : 'Game Over') + '\n');
    console.log(`Pattern: `);
    console.log(pattern);
}

const main = () => {
    let start = Date.now();

    setRound();
    begin();

    console.log(`Time: ${Date.now() - start}ms`);
};

main();