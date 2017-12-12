    // original solution
	
	var appleCount = 0;
    var orangeCount = 0;
    
    for (i = 0; i < apple.length; i++) {
       var posA = apple[i] + a;
       if (posA >= s && posA <= t) {
           appleCount++
       }
    }
    
    for (j = 0; j < orange.length; j++) {
        var posO = orange[j] + b;
        if (posO >= s && posO <= t) {
            orangeCount++;    
        }
    }
    
    console.log(appleCount);
    console.log(orangeCount);
	
	// updated solution with es6 syntax
	
	let appleCount = 0;
    let orangeCount = 0; 
    for (let i of apple) {
       let posA = i + a;
       if (posA >= s && posA <= t) appleCount++
    }
    for (let i of orange) {
        let posO = i + b;
        if (posO >= s && posO <= t) orangeCount++;    
    }
    console.log(appleCount);
    console.log(orangeCount);