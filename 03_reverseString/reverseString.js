const reverseString = function(word) {
    let newWord = '';
    newWord = word.split('').reverse().join('');
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
