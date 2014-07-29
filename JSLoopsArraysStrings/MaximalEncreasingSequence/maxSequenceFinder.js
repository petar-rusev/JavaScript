function findMaxSequence(value) {
    var result = [];
    var temp = [];

    var initStart = value[0];

    for (var i = 1; i < value.length; i++) {
        if (initStart < value[i]) { 
            temp.push(initStart);
        }
        else {
            temp.push(initStart);
            if (temp.length > result.length) {
                result = temp;
            }
            temp = [];
        }
        initStart = value[i];
    }
    temp.push(initStart); 
    if (temp.length > result.length) {
        result = temp;
    }
    temp = [];
    if (result.length < 2) { 
        console.log("no");
    }
    else {
        console.log(result);
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32, 1]);
findMaxSequence([3, 2, 1]);