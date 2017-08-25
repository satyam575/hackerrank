function sockMerchant(n, ar) {
    
    ar.sort(); 
    
    var holder = [];       
    var x = 0;
    var i = 0;
    var result = 0;
    
    
     while( i < n ){
        if( holder[x] == undefined ){
            holder[x] = [];
            holder[x].push(ar[i])
        };
        i++;
        if( ar[i] == holder[x][0] ){
            holder[x].push( ar[i] )
        }else{ x++ };
    };
    for(var i = 0; i < holder.length; i++){
        result += Math.floor( holder[i].length / 2 );
    };

    console.log(result);  
};