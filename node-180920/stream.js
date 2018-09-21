var fs = require('fs');
var data = "";


//从流中读取数据
//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为 utf-8
readerStream.setEncoding('UTF8');

//处理流事件 -->data,end,and error
//data ,当有数据可读时触发。
readerStream.on('data',function(chunk){
   data += chunk;
});
//end ,没有更多的数据可读时触发。
readerStream.on('end',function () {
    console.log(data);
});
//error,在接收和写入过程中发生错误时触发。
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("程序读取执行完毕。");


//写入流
var data2 = '我的家乡淅川网址：xiongkun.top。';

//创建一个可以写入的流，写入到文件output.text中
var writeStream = fs.createWriteStream('output.txt');

//使用 utf-8 写入数据
writeStream.write(data2,'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件
//finish, 所有数据已被写入到底层系统时触发。
writeStream.on('finish',function () {
    console.log("写入成功！");
});

writeStream.on('error',function (err) {
    console.log(err.stack);
});

console.log("程序写入执行完毕。");


//管道流，实现了大文件的复制过程。
//1.创建一个可读流，（已有var readerStream = fs.createReadStream('input.txt');）

//2.创建一个可写流
var pipeStream = fs.createWriteStream('pipe.txt');

//管道读写操作，读取 input.txt 文件内容，并写入到 output.txt 文件中
readerStream.pipe(pipeStream);

console.log("程序复制执行完毕。");



























