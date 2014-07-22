function convertDigitToWord(value) {
    for (var i = 0; i < value.length; i++) {
        var number = value[i];
        switch(number){
            case 1:
                console.log("One")
                break;
            case 2:
                console.log("Two")
                break;
            case 3:
                console.log("Three")
                break;
            case 4:
                console.log("Four")
                break;
            case 5:
                console.log("Five")
                break;
            case 6:
                console.log("Six")
                break;
            case 7:
                console.log("Seven")
                break;
            case 8:
                console.log("Eight")
                break;
            case 9:
                console.log("Nine")
                break;
            case 10:
                console.log("Ten")
                break;

        }
    } 
}
convertDigitToWord(value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);