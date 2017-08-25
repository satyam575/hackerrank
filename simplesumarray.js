function simpleArraySum(n, ar) {
   var sum = ar.reduce(function(a, b) { return a + b; }, 0);
    console.log(sum);
}