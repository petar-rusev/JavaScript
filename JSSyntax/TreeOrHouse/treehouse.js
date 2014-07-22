function treeHouseCompare(value) {

    for (var i = 0; i < 3; i++) {
        var input = value[i];
        var houseArea = 0;
        var treeArea = 0;

        var a = input[0];
        var squareArea = Math.pow(a, 2);
        var h = Math.sqrt(Math.pow(a - 1, 2) - Math.pow(a / 2, 2));
        var triangleArea = (a * h) / 2;
        houseArea = squareArea + triangleArea;

        var b = input[1];
        var squareOneArea = b * (b / 3);
        var radius = (b + 1) / 2;
        var circleArea = Math.PI * (Math.pow(radius, 2));
        treeArea = squareOneArea + circleArea;

        if (houseArea > treeArea) {
            console.log("house/" + houseArea);
        }
        else if (houseArea < treeArea) {
            console.log("tree/" + treeArea);
        }
       
    }
}
treeHouseCompare(value = [[3, 2], [3, 3], [4, 5]]);