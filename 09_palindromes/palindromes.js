const palindromes = function (word) {
    word = word.toLowerCase().trim().replace(/\s+/g, '').replace(/[^\w]/g, '');
    if (word.length < 1) return false;

    for (let i=0; i<word.length/2; i++) {
        if (word[i] !== word[word.length-1-i])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
