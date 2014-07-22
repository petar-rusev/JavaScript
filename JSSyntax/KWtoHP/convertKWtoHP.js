function convertKWtoHP(value) {
    var quot = 0.745699872;
    var hpOne = value[0] / quot;
    var hpTwo = value[1] / quot;
    var hpThree = value[2] / quot;

    console.log(value[0] + " " + hpOne.toFixed(2));
    console.log(value[1] + " " + hpTwo.toFixed(2));
    console.log(value[2] + " " + hpThree.toFixed(2));

}
convertKWtoHP(value=[75,100,1000])