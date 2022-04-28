//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // "&" = "&amp";
    // "<" = "&lt";
    // ">" =  "&gt";


    // """ =  ""&quot"
    // "'" = "&apos;"
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "&") {
            result.push("&amp;");
        } else if (str[i] == "<") {
            result.push("&lt;");
        } else if (str[i] == ">") {
            result.push("&gt;");
        } else if (str[i] == "\"") {
            result.push("&quot;");
        } else if (str[i] == "\'") {
            result.push("&apos;");
        } else {
            result.push(str[i]);
        }
    }




    return result.join("");
}

//console.log(convertHTML("Dolce & Gabbana")); //should return the string Dolce &amp; Gabbana.
//console.log(convertHTML("Hamburgers < Pizza < Tacos")); //should return the string Hamburgers &lt; Pizza &lt; Tacos.
//console.log(convertHTML("Sixty > twelve")); //should return the string Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); //should return the string Stuff in &quot;quotation marks&quot;.
//console.log(convertHTML("Schindler's List")); //should return the string Schindler&apos;s List.
//console.log(convertHTML("<>")); //should return the string &lt;&gt;.
//console.log(convertHTML("abc")); //should return the string abc.