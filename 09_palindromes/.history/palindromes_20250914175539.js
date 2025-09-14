const palindromes = function (str) {
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charArr = str.toLowerCase().split("").filter((char) => allowed.includes(char)).join("");


   
    return true;
};

// Do not edit below this line
module.exports = palindromes;
