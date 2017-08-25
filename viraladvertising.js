function processData(input) {
    var current = 2;
    var total = 2;
    for( var i = 1; i < input; i++ ){
        current = Math.floor( 3 * current / 2 );
        total += current;
    }
    console.log(total);
}