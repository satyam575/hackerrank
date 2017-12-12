// original solution

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

//updated solution with es6 syntax

const solve = grades => {
    for (let i of grades) {
        let roundUp = Math.ceil(i/5)*5; 
        if (i <= 37) i = i;
        else if (roundUp - i < 3) i = roundUp  
        console.log(i);
    }        
 }   