const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

let maxGuess = 10;

const path = '../Resources/listOfWords.txt';
const words = fs.readFileSync(path, 'utf-8').split(/[",]+/);
words.shift(); words.pop();
const wordCount = words.length;

const printArray = array => {
    let string = '';
    array.forEach(element => {
        string += element;
    });
    console.log(string);
};

const startGame = () => {
    let chosenWord = words.at(Math.trunc(Math.random() * wordCount));
    let chosenWordArray = Array.from(chosenWord);
    let guessArray = new Array(chosenWord.length).fill('_');
    let wrongArray = new Set();

    let won = false;
    let round = 0;
    while (round < maxGuess) {
        console.log();
        console.log(`Remaining guess: ${maxGuess - round} - Type 'guess' to guess the word.`);
        console.log(`Eliminated letter:`);
        printArray(wrongArray);
        console.log();
        printArray(guessArray);
        console.log();

        let option = prompt('Enter a letter -> ', String).toUpperCase();
        let guessChar = option.charAt(0);
        if (option === 'GUESS') {
            if (prompt('Your Guess? -> ', String).toUpperCase() === chosenWord) {
                won = true;
                break;
            }
            else round++;
        }
        else if (wrongArray.has(guessChar)) {
            console.log("Letter eliminated.");
        }
        else {
            let correct = false;
            for (let index in chosenWordArray) {
                let c = chosenWordArray[index];
                if (guessChar === c) {
                    guessArray[index] = c;
                    correct = true;
                }
            }
            if (!correct) {
                wrongArray.add(guessChar);
                round++;
            }
            if (!guessArray.includes('_')) {
                won = true;
                break;
            }
        }
    }
    won ? console.log('\n (!) You Won') : console.log('\n (!) You Lose');
    console.log(` -> Word: ${chosenWord}`);
}

const main = () => {
    startGame();
}

main();