// original solution

function aVeryBigSum(n, ar) {
    var sum = ar.reduce(function(a,b) {
       return a + b;
    })
    return sum                    
}

// updated solution with es6 syntax

const aVeryBigSum = (n, ar) => ar.reduce(function(a,b) { return a + b; })