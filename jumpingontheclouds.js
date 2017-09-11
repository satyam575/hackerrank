process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    
    var jumps = 0
    var index = 0
    
    while (index < c.length - 1) {
     if((index + 2 < c.length) && c[index + 2] != 1) {
        index += 2;
        } else {
        index += 1;
        }
        jumps += 1;
    }
    console.log(jumps);
};

