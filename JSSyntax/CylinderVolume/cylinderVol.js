function calcCylinderVol(value) {
    var volume;
    for (var i = 0; i < 3; i++) {
        var cylinder = value[i];
        var volume = (Math.pow(cylinder[0], 2) * cylinder[1] * Math.PI).toFixed(3);
        console.log("The volume of the cylinder with radius-" + cylinder[0] + " and\nheight-" + cylinder[1] + " is " + volume);
    }

}
calcCylinderVol(value = [[2, 4], [5, 8], [12, 3]]);