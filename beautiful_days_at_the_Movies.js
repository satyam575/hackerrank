function processData(input) {
    var count = 0
    var arr = [];
    var test = [];
    input = input.split(" ")
    var start = parseInt(input[0])
    var end = parseInt(input[1])
    var k = parseInt(input[2])
    
    for (i = start; i <= end; i++) {
        arr.push(i)
    }
    
    for (i = 0; i < arr.length; i++) {
        var reverse = parseInt(arr[i].toString().split("").reverse().join(""))
        var x = (arr[i] - reverse) / k
        if (Number.isInteger(x) === true) {
            count++
        }
    }
    console.log(count)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});