function processData(input) {
    const [holder, ...strings] = input.split("\n");
    const z = parseInt(holder);
     
    for (i = 0; i < input.length; i += 1){
        var s = strings[i];
        var count = 0;
        for (j = 1, s.length; j <= s.length; j += 1){
            if (s[j - 1] === s[j]) count += 1;
        }
        console.log(count);
    }
} 