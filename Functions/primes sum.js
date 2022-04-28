function primesSum(num) {
    let integers = [];
    let primes = 2;

    for (let i = 3; i <= num; i++) {
        integers.push(i);
    }
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    for (let x = 0; x < integers.length; x++){
        if (isPrime(integers[x]) === true){
            primes += integers[x];
        }
    }

    return primes;
}

console.log(primesSum(100));
console.log(primesSum(100));
console.log(primesSum(977));



