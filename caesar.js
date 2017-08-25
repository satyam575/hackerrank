function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
   
    k = k % 26;
    
    var strToArr = s.split("");
    var holder = [];
    
    for (var i = 0; i < strToArr.length; i++) {
    var ASCII = strToArr[i].charCodeAt(0);
        
    if (ASCII > 64 && ASCII < 91) {
        ASCII = ASCII + k
        if (ASCII > 90){
        ASCII -= 26; 
        }
    }
    if (ASCII > 96 && ASCII < 123) {
        ASCII = ASCII + k
        if (ASCII > 122) {
        ASCII -= 26;
        }
    }
    holder.push(String.fromCharCode(ASCII));   
}
    
    var x = holder.join("");
    console.log(x);

}