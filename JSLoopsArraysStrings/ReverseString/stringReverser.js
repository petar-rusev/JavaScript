function reverseString(value) {
    
    for (var i = 0; i < value.length; i++) {
        var revString = value[i];
        var result = "";
        for (var x = revString.length-1; x >= 0; x--) {
            var chars = revString[x];
            result += chars;
        }
        console.log(result);
    }
}
reverseString(value = ['sample', 'softUni', 'java script']);