/**
 * 引入相应的类
 */
var http = require('http');
var url = require("url");
var qs = require("querystring");
function start() {
    function onRequest(request, response){ //获取url的路径访问，进行判断跳转不同的控制器处理。
        var pathname = url.parse(request.url).pathname;
        var str='';
        //主界面
        if(pathname == '/'){
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            str="<h1>欢迎</h1><a href='/login'>点我登录</a>";
            response.write(str);
            response.end();
        }
        //登陆界面
        if(pathname == '/login'){
            str = require('./login').get(request,response);
        }
        //登陆处理
        if(pathname == '/dologin'){
            var s = require('./login');
            var a="";
            //接受数据
            //设置request请求的数据编码。
            request.setEncoding("utf8");
            request.addListener("data",function(postdata){
                //对表单数据进行解码
                var c = decodeURIComponent(postdata);
                //转换成json对象
                var b = qs.parse(c);
                a = b;
            });
            //接受完毕数据触发事件
            request.addListener("end",function(){
                s.deal(request,response,a);
            });
        }
        //修改界面
        if(pathname == '/modify'){

            var s = require('./login');
            var data = url.parse(request.url).query;
            data= qs.parse(data); //转化成JSON格式数据好处理
            s.dealget(request,response,data);
        }
    }
    http.createServer(onRequest).listen(8888);
    console.log("服务器启动:监听端口8888.");
}
start();
