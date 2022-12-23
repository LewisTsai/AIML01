var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/calc_cdn.html');  //回應靜態文件
});

app.get('/get', function (req, res) {
    filename = req.query.file;
    res.sendFile(__dirname+'/'+filename+'.json');
});

/*app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});*/

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});
