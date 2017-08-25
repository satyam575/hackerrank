        var nn = n.toString().split("");
        var count = 0;
        for (i = 0; i < nn.length; i++) {
            var x = parseInt(nn[i]);
            if (n % x === 0) {
                count++;
            }
        }
        console.log(count);