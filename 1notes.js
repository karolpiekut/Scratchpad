//scratchpad

//Filter objects and return matching value-name pairs

function whatIsInAName(collection, source) {

    return collection.filter(o => Object.keys(source).every(k => o.hasOwnProperty(k) && o[k] === source[k]));
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null},
    {first: "Tybalt", last: "Capulet"}], {last: "Capulet"}));


console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}],
    {"apple": 1, "bat": 2}));

//-----------------------------------------------------------------------------------------------------------

//Convert strings to spinal case (link-like)

function spinalCase(str) {
    let str2 = str.split(/(?=[A-Z])|[^a-zA-Z0-9]/g);
    return str2.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap AllThe-small Things'));

//-----------------------------------------------------------------------------------------------------------

//Bootstrap + jQuery slim

/*

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"></script>
*/

//-----------------------------------------------------------------------------------------------------------

//Font Awesome (Bootstrap icons)

/*
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous">
 */

//-----------------------------------------------------------------------------------------------------------


/*function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    let keys = Object.keys(source);   //['apple', 'bat']
    for (let i = 0; i < collection.length; i++) {
        let j = 0;
        while (keys.length > j) {
            if (keys[j] in collection[i] && collection[i][keys[j]] === source[keys[j]]) {
                arr.push(collection[i])
            }
            j++;
        }
    }

    // Only change code above this line
    return arr;
}
*/
/*
function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    let keys = Object.keys(source);   //['apple', 'bat']
    for (let i = 0; i < collection.length; i++) {
          if (keys in collection[i] && keys[collection[i]] === source[keys]) {
                arr.push(collection[i])
        }
    }

    // Only change code above this line
    return arr;
}


console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}],
    {"apple": 1, "bat": 2}));

//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].


*/


var recordCollection = {
    5439: {
        albumTitle: 'ABBA Gold',
        tracks: ["Addicted to Love"]
    },
    1245: {
        albumTitle: 'ABBA Gold',
        tracks: []
    }
};


function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value != "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
        records[id]["tracks"] = value;
    } else if (prop === "tracks" && value !== "") {
        records[id]["tracks"].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;

}


//console.log(updateRecords(recordCollection, 1245, "tracks", "yada yada yada"));
//updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")


//-------------------------------------------------------------------------------------------------------------------------------


// Default parameter on the arrow function: 
const increment = (number, value = 1) => number + value;


//-------------------------------------------------------------------------------------------------------------------------------

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line

console.log(half(stats))


function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

//------------------------------------------------------------------

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

//------------------------------------------------------------------

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

console.log(checkSign(10));

//------------------------------------------------------------------


const magic = () => new Date();

//------------------------------------------------------------------

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    let removed = arr.shift();

    return removed;
    // Only change code above this line


}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//---------------------------text replacement-----------------------
var newtext = text.replace(/in/g, "on"); //g will match on all instanes of "in"
console.log(newtext);


//---------------------------Math-----------------------------------

var rounded = Math.round(4.52312344534);
console.log(rounded);

var roundUp = Math.ceil(0.000001);
console.log(roundUp);

var roundDown = Math.floor(0.00001);
console.log(roundDown);

var randomNumber = Math.random();
console.log(randomNumber);

var randomNumberFromZeroToTen = Math.floor((Math.random() * 11));
console.log(randomNumberFromZeroToTen);

//---------------------------Strings and numbers---------------------

var stringToInt = "100";
console.log(parseInt(stringToInt));

var stringToDecimal = "1.123125234534534"
console.log(parseFloat(stringToDecimal));

var stringToNumber = "23.2323";
console.log(Number(stringToNumber));

var numberToString = 23.2323;
console.log(numberToString.toString()); //this can be checked with typeof - typeof numberTosTring

//------------------Control decimal points----------------------------

let decimal = 1.45123123;
//console.log(decimal.toFixed(2));


let decimal2 = 1.555;
//console.log(decimal2.toFixed(2));

//This is bad function - needs to be worked on to account for integers and how to deal with them:

function roundUpCorrectly(num, round) {
    var str = num.toString();
    if (str.charAt(str.length - 1) === "5") {
        str = str.slice(0, str.length - 1) + "6";
    }
    return (Number(str)).toFixed(round);
}

console.log(roundUpCorrectly(2345.1133, 2));


//----------------------playing with dates------------------------------

let time = new Date();

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = time.getDay();
let getDateFunctions = [
    "getDay()",
    "getMonth()",
    "getFullYear()",
    "getHours()",
    "getMinutes()",
    "getSeconds()",
    "getMilliseconds()",
    "getTime()"
]

console.log(days[day]);

let str = time.toString();
console.log(str);

let newDate = new Date();

console.log(time.getTime());

let polandMove = new Date("April 1, 2028") //setting up a date different to now
console.log(polandMove);
polandMove.setHours(5);
console.log(polandMove);

let setDateFunctions = [
    "setDay()",
    "setMonth()",
    "setFullYear()",
    "setHours()",
    "setMinutes()",
    "setSeconds()",
    "setMilliseconds()",
    "getTime()"
]
function replaceValues(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].replace("get", "set"));
    } return newArray;
}
console.log(replaceValues(setDateFunctions));

//----------------------functions within functions------------------------------

function tax(value) {
    return value * 0.2;
}
console.log(tax(100));

function totalCost(value){
    return value + tax(value);
}
console.log(totalCost(100));

//----------------------tell time function------------------------------

function tellTime() {
    let now = new Date();
    let theHR = now.getHours();
    let theMin = now.getMinutes();
    alert("Current time: " + theHR + ":" + theMin);
}

//----------------------write into HTML fields------------------------------
/*

<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <title>Title</title>
<style>
</style>
</head>
<body>
<form>
    <label for="zip">ZIP:</label><br>
    <input type="text" id="zip" onblur="fillCity();"><br>
        <label for="city">City:</label><br>
        <input type="text" id="city">
</form>
<script>
    function fillCity(){
    let cityName;
    let zipEntered = document.getElementById("zip").value;
    switch (zipEntered){
    case "60608":
    cityName = "Chicago";
    break;
    case "68114":
    cityName = "Omaha";
    break;
    case "53212":
    cityName = "Milwaukee";
    break;
    default:
    cityName = "Enter Zip Code";
}
    document.getElementById("city").value = cityName;
}

</script>
</body>
</html>

*/

//----------------------expanding paragraph HTML JS------------------------------
/*

<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <title>Title</title>
<style>
</style>
</head>
<body>
<p id="slowLoris">
    Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.<a
    href="javascript:void(0);" onClick="expandLoris();">Click for more.</a>
</p>

<script>
    function expandLoris() {
    var expandedPar = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patters that are species-dependent.";
    document.getElementById("slowLoris").innerHTML = expandedPar;
}

</script>
</body>
</html>

*/

//----------------------changing CSS------------------------------

/*
<body>

  <a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>
  <script>
	  function popup(message){
		  alert(message);

  <input class="one" type="button" value="Click" onClick="alert('Hello world!');">
  <h1 onMouseover="alert('Be sure to do your shopping'); this.style.color = 'red';" onMouseout = "this.style.color = 'black';">The World Ends Tomorrow</h1>

 <p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p>

<p>Name:</p><br>
    <input type="text" size="30" onFocus="makeFieldYellow();" onBlur="makeFieldWhite();">
        <br>

            <p>Email:</p><br>
            <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';" onBlur="this.style.backgroundColor='white';">
                <script>
                    function makeFieldYellow(){
                    getDocumentbyID.style.backgroundColor = 'yellow';
                }
                    function makeFieldWhite(){
                    this.style.backgroundColor = 'white';
                }
                </script>
            </body>

 */

//----------------------getElementByID different ways of changing------------------------------

//document.getElementById(id).className - for CSS
//document.getElementById(id).value - for form fields
//document.getElementById(id).innerHTML - for paragraphs, div, and other HTML
//document.getElementById(id).className += " secondClass"; - for adding new classes
//function swapPic(eId, newPic) {document.getElementById(eId).src = newPic;} - swapping elements
