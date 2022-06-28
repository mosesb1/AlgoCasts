// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    const countsA = {}, countsB = {};
    for(let i = 0; i < stringA.length; i++){
        let letter = stringA[i].toLowerCase();
        if(letters.includes(letter)){
            countsA[letter] = (countsA[letter] || 0) + 1
        }
    }
    for(let i = 0; i < stringB.length; i++){
        let letter = stringB[i].toLowerCase();
        if(letters.includes(letter)){
            countsB[letter] = (countsB[letter] || 0) + 1
        }
    }
    for(let key in countsA){
        if(countsA[key] !== countsB[key]){
            return false
        }
    }
    for(let key in countsB){
        if(countsA[key] !== countsB[key]){
            return false
        }
    }
    return true
}

module.exports = anagrams;
