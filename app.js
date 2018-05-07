var express = require('express');
var bodyParser = require('body-parser');
var mammoth = require("mammoth");

var app = express();
mammoth.extractRawText({
        path: "./ABCNovo.docx"
    }).then(function (result) {
        var str = result.value; // The raw text 

        //this prints all the data of docx file
        console.log(typeof (str));

        var check = false;
        var test = true;
        var word_num = 0;
        var pos = [];

        for (var i = 0; i < str.length; i++) {
            if (str[i] == '[') {
                check = true;
                pos.push(i);
                word_num +=1;
                console.log('[Word number] ' + word_num + ' start position is: '+i+' ...');
            }
            m = i+1;
            if( str[m]==']'){
                check = false;
                test = false;
            }

            if( check == true)
            {
                s = i+1;  
                console.log(str[s]);
            }
        }
    })
    .done();

var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use('/assets', express.static('assets'));

console.log('app running on port 50000');
app.listen(process.env.PORT || 5000);