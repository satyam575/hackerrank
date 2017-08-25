var total = 0;
    for(var i = 0; i < n - 1; i++){
        for(var j = i + 1; j < n; j++){
            if((a[i] + a[j])%k === 0){
                total++;
            }
        }
    }
    console.log(total);