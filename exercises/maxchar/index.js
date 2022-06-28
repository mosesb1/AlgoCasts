// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counts = {};
    for(let i = 0; i < str.length; i++){
        counts[str[i]] = (counts[str[i]] || 0) + 1;
    }
    let maxChar, max = 0;
    for(let key in counts){
        if(counts[key] > max){
            maxChar = key;
            max = counts[key]
        }
    }
    return maxChar
}

module.exports = maxChar;
