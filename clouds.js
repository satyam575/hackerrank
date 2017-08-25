    //(n) // number of clouds
    //(k) // how big of "jump"
    //(c) // cloud order
    var energy = 100; 
    for (i = 0; i < c.length; i += k) {
        var x = (c[i]);
        if (x == 0) {
            energy--;
        } else if ( x == 1) {
            energy = energy - 2 - 1;
        }        
    }
    console.log(energy)