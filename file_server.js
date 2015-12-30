'use strict';

var 
    fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
var root=path.resolve(process.argv[2] || '.');
console.log('Static root dir:'+root);

var server = http.createServer(function (request,response)
{
    var pathname=url.parse(request.url).pathname;
    var filepath=path.join(root,pathname);
    var re=fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile())
        {
            console.log('200'+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else if(stats.isDirectory()){
             // var a=path.resolve('.');
             // var filepath=path.join(stats,'index.html');
             // console.log('isDirectory:'+filepath);
        }else{
            console.log('404'+request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
