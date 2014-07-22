function isPrime(value) {
    for (var i = 0; i < 3; i++) {
        var check = true;
        if (value[i] % 2 == 0) {
            check = false;
            console.log(value[i] + " " + check);
        }

        else {
            
            console.log(value[i] + " " + check);
        }
    }
}
isPrime(value = [7, 254, 587]);