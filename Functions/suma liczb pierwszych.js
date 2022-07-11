function sumPrimes(num) {
    let arr1 = []; //array range from 2 to num
    let primes = []; //primes array
    for (let i = 2; i <= num; i++) {
        arr1.push(i);
    } //creates arr1 array
    function fix(arr) { //accepts one parameter - this is the array of number from 2 to num
        primes.push(arr.shift()); //grabs first number (prime) from the arr1, moves it to the primes array
        let arr1Rep = []; //temp holds array of numbers that need to be "filtered" for primes
        for (let i = 0; i < arr.length; i++){ //iterates through arr1, after first numbers is removed from it
            if (arr[i] % primes[primes.length -1] != 0) { //if anny value from arr1 has any "change" left after it's divided by the last number in the primes array                                                 
                arr1Rep.push(arr[i]) //move it to the temp arr1Rep array
            } 
        }
        arr1 = arr1Rep; //after the above operation is completed set arr1 as a temp array that has been filtered by the last number in the primes array
    }
    while (arr1.length > 0) { //run fix function until there are no more numbers left to "filter" in the arr1 array
        fix(arr1)
    }
 return primes.reduce((partialSum, a) => partialSum + a, 0); //return a sum of all primes from the primes array
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));






