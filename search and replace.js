//Perform a search and replace on the sentence using the arguments provided and return the new sentence.


//First argument is the sentence to perform the search and replace on.


//Second argument is the word that you will be replacing (before).


//Third argument is what you will be replacing the second argument with (after).


//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


//compare before and after - then hold the value of after in a variable 


/*
var first = "john";
var second = "Mark";


function upper(par1, par2){
 let jim = "";
if (par1[0] === par1[0].toUpperCase()){
jim = par2.charAt(0).toUpperCase() + par2.slice(1);
} else {
jim = par2.charAt(0).toLowerCase() + par2.slice(1);
} return jim;
}
console.log(upper(first, second));
*/



function myReplace(str, before, after) {
    let after2 = "";
    if (before[0] === before[0].toUpperCase()) {
        after2 = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after2 = after.charAt(0).toLowerCase() + after.slice(1);
    }
    var result = [];
    for (const i of str.split(" ")) {
        if (i != before) {
            result.push(i);
        } else {
            result.push(after2);
        }
    }
    return result.join(" ");
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


console.log(myReplace("Let us go to the store", "store", "mall")); //should return the string Let us go to the mall.


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //should return the string He is Sitting on the couch.


console.log(myReplace("I think we should look up there", "up", "Down")); //should return the string I think we should look down there.


console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); //should return the string This has a spelling error.


console.log(myReplace("His name is Tom", "Tom", "john")); //should return the string His name is John.


console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); //should return the string Let us get back to more Algorithms.