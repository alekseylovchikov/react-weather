module.exports = {
    capitalize: function(word) {
        var firstLetter = word.slice(0, 1).toUpperCase();
        if (word.length > 1) {
            var latestLetter = word.slice(1, word.length);
            return firstLetter + latestLetter;
        } else {
            return firstLetter;
        }  
    },
    formatTemp: function(temp) {
        if (temp > 0) {
            return '+' + temp;
        } else {
            return temp;
        }
    },
};