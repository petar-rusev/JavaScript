function compareChars(value) {
    for (var i = 0; i < 3; i++) {
        var arrCheck = value[i];
        var arrOne=arrCheck[0];
        var arrTwo=arrCheck[1];
        if (arrOne.length != arrOne.length) {
            console.log("Not Eqaul");
        }
        else {
            var result = 0;
            for (var x = 0; x < arrOne.length; x++) {
                var check;
                var checkFinal = [];

                if (arrOne[x] === arrTwo[x]) {
                    check = 1;
                    checkFinal.push(check);
                }
                else {
                    check = 0;
                    checkFinal.push(check);
                }

                result += checkFinal[0]

            }
            if (result == arrOne.length) {
                console.log("Equal");
            }
            else {
                console.log("Not Equal");
            }

        }
        }
    }

compareChars(value = [[['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']], [['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']], [['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]]);