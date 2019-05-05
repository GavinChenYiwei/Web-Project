const express = require('express');
const app = express();
const PORT = 3000;

const guessWord = require('./word');
const guessWeb = require('./guess-web');

let count = 1;
let targetWord = guessWord.randomTarget(guessWord.words);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send(guessWeb.guessPage(guessWord));
});

app.post('/guess', express.urlencoded({ extended: false }), (req, res) => {
    const word = req.body.word;
    let addWord = guessWord.addGuessedWord(word,targetWord);
    if (addWord === true) {
        if (word.toUpperCase() === targetWord){
            guessWord.messageInfo = `You are success in ${count} guesses!<br>New Game has restart! Guess again!`;
            setTimeout(function () {
                restartGame();
            },1000);
        }
        else {
            count++;
            guessWord.roundTurn = count;
            guessWord.matchLetter = guessWord.countMatchLetter(word, targetWord);
            guessWord.messageInfo = `Numbers of \"matching\" letters: &nbsp;&nbsp;${guessWord.matchLetter}`;
        }
    }else {
        guessWord.messageInfo = "Invalid Input";
    }

    res.redirect('/');
})

app.post('/restart', (req,res) => {
    restartGame()
    res.redirect('/');
})

function restartGame(){
    targetWord = guessWord.randomTarget(guessWord.words);
    count = 1;
    guessWord.roundTurn = 1;
    guessWord.matchLetter = 0;
    guessWord.messageInfo = `Numbers of \"matching\" letters: &nbsp;&nbsp;${guessWord.matchLetter}`
    guessWord.guessList.length = 0;
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));