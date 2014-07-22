function variablesTypes(value) {
    var name = value[0];
    var age = value[1];
    var isMale = value[2];
    var food = value[3];
    var foodString = "";
    for (var i = 0; i < food.length; i++) {
        
        foodString += food[i];
        if (i < 2) {
            foodString+=","
        }
    }
    console.log("My name: " + name + " //type is " + typeof (name));
    console.log("My age: " + age + " //type is " + typeof (age));
    console.log("I am male: " + isMale + " //type is " + typeof (isMale));
    console.log("My favorite foods are: " + foodString + " //type is " + typeof (food));

}
variablesTypes(value=['Pesho', 22, true, ['fries', 'banana', 'cake']])