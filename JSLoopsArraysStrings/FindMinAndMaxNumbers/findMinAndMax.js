function findMinAndMax(value) {
    
    for (var i = 0; i < 3; i++) {
        var arrNums = value[i];
        var sortArr = arrNums.sort(function (a, b) { return a - b });
        console.log("Min->"+sortArr[0]);
        console.log("Max->"+sortArr[sortArr.length-1])
    }
}
findMinAndMax(value=[[1, 2, 1, 15, 20, 5, 7, 31], [2, 2, 2, 2, 2], [500, 1, -23, 0, -300, 28, 35, 12]]);