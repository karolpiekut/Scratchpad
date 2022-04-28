function primesSum(num) {
    let integers = [];


    for (let i = 2; i <= num; i++) {
        integers.push(true);
    }
    console.log(integers.length);


    return integers;
}

console.log(primesSum(100));


