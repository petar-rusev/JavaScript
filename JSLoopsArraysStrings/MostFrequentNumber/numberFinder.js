function findMostFreqNum(value) {
    for(var i=0;i<value.length;i++){
        var arrCheck = value[i];
        var arrSort = arrCheck.sort(function (a, b) { return a - b });
        var tempNum = arrSort[0];
        var tempCount = 1;
        var Num = new Array();
        var length = new Array();
        var finalResult = new Array();
        for (var x = 1; x <= arrSort.length; x++) {
            if (tempNum == arrSort[x]) {
                tempCount++;

            }
            else {
                Num.push(tempNum);
                length.push(tempCount);
                tempNum = arrSort[x];
                tempCount = 1;
            }
        }
        
        var Max = Math.max.apply(Math, length);
        var key = length.indexOf(Max);
        
        console.log(Num[key] + " " + "(" + length[key] + " times" + ")");
        
    }
}
findMostFreqNum(value = [[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3], [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]]);