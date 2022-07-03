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






