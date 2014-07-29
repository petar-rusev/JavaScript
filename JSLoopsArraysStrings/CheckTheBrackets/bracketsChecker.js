function checkBracketsValue(value) {
    for (var i = 0; i < value.length; i++) {
        var checkString = value[i];
        var reg = [new RegExp(/[a-z]/gi), new RegExp(/[+]/gi), new RegExp(/[*]/gi), new RegExp(/[/]/gi), new RegExp(/[0-9]/gi), new RegExp(/\s/gi), new RegExp(/[*/-]/gi)];
        var cutString = checkString;
        
        for (var x = 0; x < reg.length; x++) {
            cutString = cutString.replace(reg[x], '');
            cutString = cutString.replace('-', '');
        }
        
       // var regBrackets = [new RegExp(/[)]/gi), new RegExp(/[(]/gi)];
        var OpenBracket = 0;
        var CloseBracket = 0;
       
        for (var z = 0; z < cutString.length; z++) {
            
            if (cutString[z]=='(') {
                OpenBracket++;

            }
            if (cutString[z]==')') {
                CloseBracket++;
            }
        }
        if (OpenBracket!=CloseBracket||cutString[0]==')') {
            console.log("incorrect")
        }
        if(OpenBracket==CloseBracket&cutString[0]!=')') {
            console.log("correct")
        }
        
    }
}
checkBracketsValue(value = ['( ( a + b ) / 5 – d )', ') ( a + b ) )', '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )']);
