//链式是通过连接输出流到另外一个流，并创建多个流操作链的机制。链式流一般用于管道操作，压缩和解压文件。
var fs = require("fs");
var zlib = require("zlib");

//压缩input.text 为input.text.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");

