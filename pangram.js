const isPangram = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const stringLetters = string.toLowerCase().split('');
    return alphabet.every(letter => stringLetters.includes(letter));
};


var string = "The quick brown fox jumps over the lazy dog."
var string2 = "This is not a pangram."
console.log(isPangram(string))
console.log(isPangram(string2))