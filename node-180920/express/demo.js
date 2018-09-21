var express = require('express');
var app = express();

app.get('/',function (req, res) {
    res.send('Hello World');
});
var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(server.address());
    console.log("应用实例，访问地址为http://127.0.0.1",host,port);
});