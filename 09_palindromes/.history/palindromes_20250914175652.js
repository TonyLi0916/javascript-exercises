const palindromes = function (str) {
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charArr = str.toLowerCase().split("").filter((char) => allowed.includes(char)).join("");
    const reverse = charArr.split("").reverse().join("");

    return charArr === reverse;

};

// Do not edit below this line
module.exports = palindromes;
