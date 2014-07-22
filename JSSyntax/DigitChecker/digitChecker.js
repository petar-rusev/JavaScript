function checkDigit(value) {
    for (var i = 0; i < 3; i++) {
        var num = value[i];
        var stringNum = num.toString();
        var check = true;
        if (stringNum[stringNum.length - 3] == "3") {
            console.log(stringNum + " " + check);
        }
        else {
            check = false;
            console.log(stringNum + " " + check);

        }
        
    }
}
checkDigit(value =[1235,25368,123456])