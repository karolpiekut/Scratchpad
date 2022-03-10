//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphaIndex; //index of the first letter in alpha based on str
    let strIndex = 0;
    let missing;
    for (let i = 0; i < alpha.length; i++) {
        if (str[0] == alpha[i]) {
            alphaIndex = i;
        }
    }

    while (strIndex < str.length){
      if (alpha[alphaIndex] != str[strIndex]) {
        missing = alpha[alphaIndex];
       break;
      }
      //console.log(`Alpha: ${alpha[alphaIndex]}`);
      //console.log(`Str: ${str[strIndex]}`);
      alphaIndex ++;
      strIndex ++;

    }

    
    if (str == alpha) {
      return undefined;
    } else {
      return missing;
    }

}


console.log(fearNotLetter("bcdf")); //should return the string e.
console.log(fearNotLetter("abce")); //d
console.log(fearNotLetter("abce")); //should return the string d.
console.log(fearNotLetter("abcdefghjklmno")); //should return the string i.
console.log(fearNotLetter("stvwx")); //should return the string u.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //should return undefined.
