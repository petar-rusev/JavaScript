function evenNumber(value) {
    for (var i = 0; i < 3; i++) {
        var check = true;
        if (value[i] % 2 == 0) {
            console.log(value[i] + " " + check);
            
        }
        else {
            check = false;
            console.log(value[i] + " " + check);
            
        }
    }
}
evenNumber(value = [3, 127, 588]);