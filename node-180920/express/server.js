var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(express.static('public'));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

connection.connect();

app.get('/index.html',function (req, res) {
    res.sendFile(_dirname+"/"+"index.html");
});

app.get('/login',function (req, res) {
    var post = {
        'name':req.query.name,
        'password':req.query.password
    };

    var sql = "SELECT * FROM t_user WHERE name = '"+post.name+"'";

    connection.query(sql,function (error, results, fields) {
        if(error){
            console.log(error.message);
            return;
        }else{
            res.status(200);
            if(results.length < 1){
                res.json(0);
            }else{
                var password = results[0].password;
                if(password==post.password){
                    res.json(1);
                }else{
                    res.json(2);
                }
            }
        }
    });
});

app.get('/detail',function (req, res) {
    var post = {'name':req.query.name};
    var sql = "SELECT * FROM t_user WHERE name = '"+post.name+"'";

    connection.query(sql,function (error, result, fields) {
        if(error){
            console.log(error.message);
            return;
        }else{
            res.json(result);
        }
    })
});

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("server start at http://127.0.0.1:"+port);
});

























