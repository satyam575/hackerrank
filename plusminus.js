    // original solution
	
	var positive = arr.filter(function(x){ return x > 0 });
    console.log(positive.length/n) 
    var negative = arr.filter(function(x){ return x < 0 });
    console.log(negative.length/n) 
    var neutral = arr.filter(function(x){ return x == 0 });
    console.log(neutral.length/n) 
	
	//updated solution
	
const main = () => {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(arr.filter(function(x){ return x > 0}).length/n)
    console.log(arr.filter(function(x){ return x < 0}).length/n)
    console.log(arr.filter(function(x){ return x == 0}).length/n)
}