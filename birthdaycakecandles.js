    var tallest = height.reduce(function(a, b) {
    return Math.max(a, b) });
	
    var count = 0; 
    for (i = 0; i < height.length; i++) {
        if (height[i] == tallest) {
            count++
        }
    }
    console.log(count);