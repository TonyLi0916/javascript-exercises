const palindromes = function (str) {
    const charArr = str.toLowerCase().split("");
    const reverse = charArr.reverse();

    for (let i = 0; i < reverse.length; i++ ) {
        if (reverse[i] != charArr[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
