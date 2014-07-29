function printNumbers(n) {

    for (var i = 0; i < n.length; i++) {
        if (n[i] > 0) {
            for (var x = 1; x < n[i]+1; x++) {
                var result = "";
                var number = x;
                if ((number%4!=0&&number%5!=0)) {
                    result += number;
                    if (x < n[i] - 1) {
                        result += ",";
                    }
                    process.stdout.write(result);
                    
                }
             
            }
            console.log();
        }
        else {
            process.stdout.write("no\n");
        }
    }
    
}
printNumbers(n = [20, -5, 13]);