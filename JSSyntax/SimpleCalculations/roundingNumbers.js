function roundNumber(value) {

    var lower;
    var higher;

    for (var i = 0; i < 3; i++) {

        lower = Math.round(value[i]);
        higher = Math.floor(value[i]);
        console.log(value[i] + " " + "lower-" + lower + " " + "higher-" + higher);

    }
}
roundNumber(value=[22.7,12.3,58.7]);