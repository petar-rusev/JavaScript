function divisionBy3(value) {
    for(var i=0;i<3;i++){
        if (value[i] % 3 == 0) {
            console.log("the number" + value[i] + " is divided by 3 without remainder");

        }
        else {
            console.log("the number" + value[i] + " is not divided by 3 without remainder");
        }
        }
}
divisionBy3(value = [12, 188, 591]);