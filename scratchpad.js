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



