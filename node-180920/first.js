//引入http模块
var http = require("http");
//创建服务器
http.createServer(function(request,response){
    //发送 HTTP 头部
    //HTTP 状态值：200 OK
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送相应数据
    response.end("Hello World!");
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');