	var x = a.length;
    var diag1 = 0;
    var diag2 = 0;
    
    for(var i=0; i < x; i++){
        for(var j=0; j < x; j++){
            if(i === j) { 
                diag1 += a[i][j];
            }
            if(i + j === x - 1){
                diag2 += a[i][j];
            }
        }
    }
     console.log(Math.abs(diag1 - diag2));
}