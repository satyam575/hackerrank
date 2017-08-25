function solve(grades){
    for (i = 0; i < grades.length; i++) {
    var roundUp = Math.ceil(grades[i]/5)*5; 
    if (grades[i] <= 37) {
        grades[i] = grades[i];
    } else if (roundUp - grades[i] < 3) {
        grades[i] = roundUp
    } else {
        grades[i] = grades [i];      
    } 
        console.log(grades[i]);
    }  
}    