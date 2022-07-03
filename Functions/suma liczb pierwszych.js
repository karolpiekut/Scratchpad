//A prime number is a whole number greater than 1 with exactly two divisors:
//1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
/*
algorithm Sieve of Eratosthenes is
    input: an integer n > 1.
    output: all prime numbers from 2 through n.

    let A be an array of Boolean values, indexed by integers 2 to n,
    initially all set to true.

    for i = 2, 3, 4, ..., not exceeding √n do
        if A[i] is true
            for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
                set A[j] := false

    return all i such that A[i] is true.

    pierwsza liczba 2 - wykreślamy wszystkie jej wielokrotności, potem 3, potem 5 itd.

 */

/*
function sumPrimes(num) {
    //if (num > 0) {
    for (let i = 2; i <= num; i++) {
       arr1.push(i);
    }
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] % 2 != 0 ){
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

*/
//console.table(sumPrimes(10)); //should return 17.
//console.log(sumPrimes(977)); //should return 73156.






/*
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primes = [];
function fix(arr) {
    primes.push(arr.shift());
    let arr1Rep = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % primes[primes.length -1] != 0) {
            arr1Rep.push(arr[i])
        }
    }
    arr1 = arr1Rep;
}

while (arr1.length > 0) {
    fix(arr1)
}

console.log(arr1);
console.log(primes);
*/

function sumPrimes(num) {
    let arr1 = [];
    let primes = [];
    for (let i = 2; i <= num; i++) {
        arr1.push(i);
    }
    function fix(arr) {
        primes.push(arr.shift());
        let arr1Rep = [];
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % primes[primes.length -1] != 0) {
                arr1Rep.push(arr[i])
            }
        }
        arr1 = arr1Rep;
    }
    while (arr1.length > 0) {
        fix(arr1)
    }
 return primes.reduce((partialSum, a) => partialSum + a, 0);;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));






