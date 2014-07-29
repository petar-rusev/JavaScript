function countSubstringOccur(value) {
    for (var i = 0; i < value.length; i++) {
    var arrCheck = value[i]
    var keyword = arrCheck[0];
    var text = arrCheck[1];
    var kl = keyword.length;
    var tl = text.length;
    var counter = 0;
    text = text.toLowerCase();
    for (var i = 0; i < tl - kl; i++) {
        if (keyword == text.substring(i, i + kl)) {
            counter++
        }
        
    }
    console.log(counter);
    }
}
countSubstringOccur(value = [['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'], ['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.'],['but', 'But you were living in another world tryin\' to get your message through.']])