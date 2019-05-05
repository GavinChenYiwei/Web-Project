const words = [
    "TEA",
    "EAT", 
    "TEE",
    "PEA",
    "PET",
    "APE",
];

const guessList = [
];

let roundTurn = 1;
let Valid = true;
let matchLetter = 0;
let messageInfo = `Numbers of \"matching\" letters: &nbsp;&nbsp;${matchLetter}`;
let targetWord;

function randomTarget(words){
    targetWord = words[Math.floor(Math.random()*words.length)];
    return targetWord;
}

function countMatchLetter(word,target){
    word = word.toUpperCase();
    target = target.toUpperCase();
    matchLetter = 0;
    if(word === target)
        return target.length;
    let exist = [];
    for (let i = 0; i < target.length; i++) {
        if (word.indexOf(target.charAt(i)) !== -1 && exist.indexOf(target.charAt(i)) === -1){
            matchLetter++;
            exist.push(target.charAt(i));
        }
    }
    return matchLetter;
}

function addGuessedWord(word, target){
    if (isValid(word)) {
        let matchCount = countMatchLetter(word,target);
        guessList.push(`${word} (matches ${matchCount} letters)`);
        return true;
    }
    else
        return false;
}

function isValid(word){
    word = word.toUpperCase();
    let index = words.indexOf(word);
    if (index === -1)
        Valid = false;
    else
        Valid = true;
    return Valid;
}

const guessWord = {
    words,
    guessList,
    addGuessedWord,
    roundTurn,
    messageInfo,
    randomTarget,
    matchLetter,
    countMatchLetter,
    messageInfo
}

module.exports = guessWord;