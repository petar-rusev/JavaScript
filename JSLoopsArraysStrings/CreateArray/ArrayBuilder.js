function createArray(value) {
    var newArray = [];
    for (var i = 0; i < value.length; i++) {
        newArray.push(i * 5);
    }
    console.log(newArray);
}
createArray(value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);