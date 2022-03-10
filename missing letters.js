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





/*


function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    //code of current character 
    var code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration hence character has been escaped 
    if (code !== str.charCodeAt(0) + i) {
    // if current character has escaped one character find previous char and return 
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

*/

/*
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

*/