    var positive = arr.filter(function(x){ return x > 0 });
    console.log(positive.length/n) 
    var negative = arr.filter(function(x){ return x < 0 });
    console.log(negative.length/n) 
    var neutral = arr.filter(function(x){ return x == 0 });
    console.log(neutral.length/n) 