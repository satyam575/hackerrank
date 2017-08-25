   // console.log(n); // number of hurdles
   // console.log(k); // max jump height
   // console.log(height); // array of hurdles
    
    var largest = Math.max.apply(Math, height); 
        
    if (largest > k) {
      console.log(largest - k);
    } else {
      console.log(0);
    }