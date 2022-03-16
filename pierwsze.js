function primes(num) {
  let primes =[2, 3, 5, 7]
  for (let i = 10; i <= num; i++){
    if (i & 2 != 0 || i & 3 != 0 || i & 4 != 0 || i & 5 != 0 || i & 6 != 0 || i & 8 != 0 || i & 9 != 0){

    primes.push(i);
  }
}
  return primes;


}


console.log(primes(10)); 

console.log(primes(977)); 