function processData(input) {
     var level = 0; 
     var valleys = 0;
     var belowSea = false;
    
     for(i = 0; i < input.length; i++) {
         var terrain = input[i];
         if (terrain === "U") {
            level++   
         } else if (terrain === "D") {
             level--
         
             }
           if (belowSea == false && level < 0) {
                valleys++;
                belowSea = true;
            }
            
           if(level >= 0) {
                belowSea = false;
        }
     }
        console.log(valleys)
    }