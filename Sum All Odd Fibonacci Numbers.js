//Sum All Odd Fibonacci Numbers

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {

    let array = [];
    let temp = [1, 1];
    //let sum = 0;


    console.log("--------------------array-------------------------");
    for (let i = 2; i < num +1; i++) {
        array.push(i);
    }

    console.log(array);


     console.log("--------------------temp-------------------------");
    for (let i = 2; i < num +1; i++) {
        array.push(i);
    }

    console.log(array);

    /*
    console.log("--------------------final array-------------------------");
    for (let i = 2; i < array.length; i++) {
        if (i % 2 != 0) {
            finalArray.push(i);
        }
    }

    console.log(finalArray);


    console.log("--------------------sum-------------------------");
    for (let i = 0; i < finalArray.length; i++) {
        sum += finalArray[i];
    }
    */
    //return array;

}

//console.log(sumFibs(100));
console.log(sumFibs(10)); //should return 10 
//console.log(sumFibs(1)); //should return a number
//console.log(sumFibs(1000)); //should return 1785
//console.log(sumFibs(4000000)); //should return 4613732
//console.log(sumFibs(4)); //should return 5
//console.log(sumFibs(75024)); //should return 60696
//console.log(sumFibs(75025)); //should return 135721

// 1 1 2 3 5 8 13 21 34 55 89 144 233 377
