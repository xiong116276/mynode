var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function (req, res) {
    res.send('Hello World');
});

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server start at http://127.0.0.1:"+port+"images/qushou-02.jpg");
});