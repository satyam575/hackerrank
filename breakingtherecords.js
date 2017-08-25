function getRecord(s){
    var low = s[0];
    var high = s[0];
    var breakLow = 0;
    var breakHigh = 0;
    for(var i = 1; i < s.length; i++){
        if(s[i] > high){high = s[i]; breakHigh++}
        else if(s[i] < low){low = s[i]; breakLow++};
    }
    console.log(breakHigh + ' ' + breakLow);
}