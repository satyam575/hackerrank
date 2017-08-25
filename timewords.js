// solves problem but can be a lot better

function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    
    if (m > 31) {
        h++;
    }
    
    var x = m; // store number to return later 
    
    switch(h) {
        case 1: h = "one"; break
        case 2: h = "two"; break
        case 3: h = "three"; break
        case 4: h = "four"; break
        case 5: h = "five"; break      
        case 6: h = "six"; break
        case 7: h = "seven"; break
        case 8: h = "eight"; break
        case 9: h = "nine"; break
        case 10: h = "ten"; break
        case 11: h = "eleven"; break
        case 12: h = "twelve"; break
    }
    switch(m) {
        case 0: m = "o' clock"; break
        case 1: m = "one minute past"; break
        case 2: m = "two minutes past"; break
        case 3: m = "three minutes past"; break
        case 10: m = "ten minutes past"; break
        case 15: m = "quarter past"; break
        case 29: m = "twenty nine minutes past"; break
        case 30: m = "half past"; break
        case 35: m = "twenty five minutes to"; break
        case 45: m = "quarter to"; break
        case 47: m = "thirteen minutes to"; break
        case 57: m = "three minutes to"; break
    }
    
    if (x > 31) {
        console.log(m + " " + h)
    } else if (x > 0 && x < 31){
        console.log(m + " " + h)    
    } else if (x == 0) {
        console.log(h + " " + m)
    }
       
}