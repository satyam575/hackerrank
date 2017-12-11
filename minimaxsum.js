// original solution

var result1 = 0;
var result2 = 0;

var max = arr.reduce(function(a, b) {
return Math.max(a, b); })
var min = arr.reduce(function(a, b) {
return Math.min(a, b); })

for (i = 0; i < arr.length; i++) {
    result1 += arr[i];
    result2 += arr[i];
    }
	
console.log(result1 - max, result2 - min);

// updated solution

const main = () => {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var max = arr.reduce(function(a, b) { return Math.max(a, b); })
    var min = arr.reduce(function(a, b) { return Math.min(a, b); })
    var sum = arr.reduce(function(a, b) { return a + b })
    console.log(sum - max, sum - min);
}
