const guessWeb = {
	guessPage: function (guessWord) {
		return `
        <DOCTYPE html>
        <html>
            <head>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="guess-panel">
                <div class="guess-panel-word">
                    <h1>Guess List</h1>
                    <div class="guessed-word-list">
                        ${guessWeb.getGuessedWordList(guessWord)}
                    </div>
                </div>
                <div class="guess-panel-user">
                    <h1>Round &nbsp;	${guessWord.roundTurn}</h1>
                    <p>${guessWord.messageInfo}</p>
                    <form action="/guess" method=POST>
                        <div class="word-guess">
                            <label for="word">Guess: </label>
                            <input required type="text" name="word" id="word" value="" placeholder="Enter the word you guess">
                        </div>
                        <div class="button">
                            <button type="submit">Try it</button>
                        </div>
                    </form>
                    <form action="/restart" method=POST>
                        <button type="submit">Restart</button>
                    </form>
                </div>
                <div class="provided-word">
                    <h1>Words Pool</h1>
                    <div class="provided-word-list">
                        ${guessWeb.getProvidedWordList(guessWord)}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    },
    
    getGuessedWordList: function(guessWord) {
        return `<ol>` +
        Object.values(guessWord.guessList).map( word => `<li>${word}</li>`).join('') +
        `</ol>`;
    },

    getProvidedWordList: function(guessWord) {
	    return `<ul>` +
            Object.values(guessWord.words).map(word => `<li>${word}</li>`).join('') +
            `</ul>`;
    },
}

module.exports = guessWeb;
