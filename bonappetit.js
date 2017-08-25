function bonAppetit(n, k, b, ar) {
   
    k = ar[k]; // 10
    
    var index = ar.indexOf(k);
    ar.splice(index, 1);
       
    var arSum = ar.reduce(function(a, b) { return a + b; }, 0);
    
    if (arSum / 2 === b) {
        console.log("Bon Appetit")
    } else {
        console.log(b - arSum / 2)
    }  
}