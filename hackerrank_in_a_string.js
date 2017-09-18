function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = "hackerrank";
        if(s.length < result.length){
            console.log("NO");
        }
        var j = 0;
        for(var i = 0; i < s.length; i++){
         if(j < result.length && s.charAt(i) == result.charAt(j)){
             j++;
            }
        }
        if(j == result.length){
           console.log ("YES")
        } else {
           console.log("NO")
        }
}
}
