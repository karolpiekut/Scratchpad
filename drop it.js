function dropElements(arr, func) {
    const hmm = arr.map(hm => func(hm));
    
    
    return hmm;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));