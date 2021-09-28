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