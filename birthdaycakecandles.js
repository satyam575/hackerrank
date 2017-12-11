    // original solution
	
	var tallest = height.reduce(function(a, b) {
    return Math.max(a, b) });
	
    var count = 0; 
    for (i = 0; i < height.length; i++) {
        if (height[i] == tallest) {
            count++
        }
    }
    console.log(count);
	
	// updated solution with es6 syntax
	
const birthdayCakeCandles = (n, ar) => {
    let count = 0;
    for (let i of ar) {
        if (i == (ar.reduce(function(a, b) { return Math.max(a, b) }))) count++
    }
    return count
}