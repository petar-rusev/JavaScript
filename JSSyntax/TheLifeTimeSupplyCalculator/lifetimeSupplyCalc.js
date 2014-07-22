function calcSupply(value) {
    var chocolate = value[0];
    var fruits = value[1];
    var nuts = value[2];
    
    var chockPerYear = chocolate[2] * 365;
    var fruitPeryear = fruits[2] * 365;
    var nutPerYear = nuts[2] * 365;

    var yearOne = chocolate[1] - chocolate[0];
    var yearTwo = fruits[1] - fruits[0];
    var yearThree = nuts[1] - nuts[0];

    var arrayYears = [yearOne, yearTwo, yearThree];
    var arrayFoods = [chockPerYear, fruitPeryear, nutPerYear];
    var lifeTime = [chocolate[1], fruits[1], nuts[1]];
    for (var i = 0; i < 3; i++) {
        var food;
        if (i == 0) {
            food = "chocolate";
        }
        if (i == 1) {
            food = "fruits";
        }
        if (i == 2) {
            food = "nuts";
        }
        console.log((arrayFoods[i] * arrayYears[i]).toFixed(0) + "kg of" + " " + food + " would be enough\nuntil I am " + lifeTime[i] + " years old.");
    }
}
calcSupply(value = [[38, 118, 0.5], [20, 87, 2], [16, 102, 1.1]]);