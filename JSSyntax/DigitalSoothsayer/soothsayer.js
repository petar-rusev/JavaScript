function soothsayer(value) {
    var numbers = value[0];
  
    var languages = value[1];
    var match=new RegExp()
    var cities = value[2];
    var cars = value[3];
    var years = numbers[(Math.floor(Math.random() * numbers.length) + 0)];
    var language = languages[(Math.floor(Math.random() * languages.length)+0)];
    var city = cities[(Math.floor(Math.random() * cities.length)+0)];
    var car = cars[(Math.floor(Math.random() * cars.length)+0)];

    var result = "You will work " + years + " years on "+language+"."+"\nYou will live in " + city + " and drive " + car + ".";
    console.log(result);
    
}
soothsayer(value=[[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]);