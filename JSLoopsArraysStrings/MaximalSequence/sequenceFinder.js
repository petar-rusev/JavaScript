function findMaxSequence(value) {
    
    for (var i = 0; i < value.length; i++) {
        arrCheck = value[i];

        var tempLength = 1;
        var length = 1;
        var tempNum = "";
        if (arrCheck.length == 1) {
            console.log(arrCheck);
        }
        else {
            for (var x = 0; x < arrCheck.length; x++) {
                if (arrCheck[x] === arrCheck[x - 1]) {
                    tempLength++;
                    tempNum = (arrCheck[x]).toString();
                }
                else {
                    if (tempLength > length) {
                        length = tempLength;
                    }
                    tempLength = 1;
                }
            }
            
            var result = new Array(length);
            for (var z = 0; z < result.length; z++) {
                result[z] = parseInt(tempNum);
            }
            console.log(result);
        }
    }
}
findMaxSequence(value = [[2, 1, 1, 2, 3, 3, 2, 2, 2, 1], ['happy'], [2, 'qwe', 'qwe', 3, 3, '3']]);
