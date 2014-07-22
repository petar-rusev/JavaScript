function bitChecker(value) {
    var check = true;
    for(var i=0;i<3;i++){
        var binary = Number(value[i]).toString(2);
        
        var bitPos=binary.length-4;
        var check = true;
        if (binary[bitPos] == 1) {
            console.log("The third bit of the number" + value[i] + " is 1 " + check);
           

        }
        else {
            check = false;
            console.log("The third bit of the number" + value[i] + " is 1 " + check);
           
        }
    }
    
}
bitChecker(value = [333, 425, 2567564754]);