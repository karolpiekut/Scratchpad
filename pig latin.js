//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//- If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let regex = /^[bcdfghjklmnpqrstvwxyz]+/gmi;
  if (regex.test(str)){
    let set = str.match(regex).toString();
    return str.substring(set.length) + set + "ay";
  } else {
    return str + "way";
  }
}

console.log(translatePigLatin("california")) //should return the string aliforniacay.
console.log(translatePigLatin("paragraphs")) //should return the string aragraphspay.
console.log(translatePigLatin("glove")) //should return the string oveglay.
console.log(translatePigLatin("algorithm")) //should return the string algorithmway.
console.log(translatePigLatin("eight")) //should return the string eightway.
console.log(translatePigLatin("schwartz")) //handle words where the first vowel comes in the middle, return the string artzschway.
console.log(translatePigLatin("rhythm")) //Should handle words without vowels. Should return the string rhythmay.


//let constants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
//let vovels = ["a", "e", "i", "o", "u"]; 


function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");


function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}