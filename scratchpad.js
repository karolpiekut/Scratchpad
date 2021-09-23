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

