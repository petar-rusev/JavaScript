function sortArray(value) {
    for (var i = 0; i < value.length; i++) {
        var sortArr = (value[i]).sort(function (a, b) { return a - b });
    
    var result = "";
    for (var x = 0; x < sortArr.length; x++) {
        result += sortArr[x];
        if (x < sortArr.length-1) {
            result+=", "
        }
        
    }
    console.log(result);
    }
}
sortArray(value = [[5, 4, 3, 2, 1], [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]])