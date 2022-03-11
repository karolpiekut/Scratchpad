function fibb(num) {
    let fibbonacci = [1, 1];
	let hmm = 2;    
	let sortedFib = [];
    while (hmm <= num) {
        	for (let i = 0; i < fibbonacci.length; i++){
    		if ((fibbonacci[i] + fibbonacci[i+1]) == hmm){
    			fibbonacci.push(hmm);
    		}
    	}



    	hmm++
    }

      for (let i = 2; i < fibbonacci.length; i++) {
        if (i % 2 != 0) {
            sortedFib.push(fibbonacci[i]);
        }
    }

    return fibbonacci;
}


console.log(fibb(10));
console.log(fibb(100));

