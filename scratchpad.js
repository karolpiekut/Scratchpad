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
  if (prop !== "tracks" && value != ""){
    records[id][prop] = value;
  } else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")){
    records[id]["tracks"] = value;
  } else if (prop === "tracks" && value !== ""){
    records[id]["tracks"].push(value);
  } else if (value === ""){
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
  var removed =arr.shift();

  return removed;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
