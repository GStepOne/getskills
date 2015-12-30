'use strict';

var fs=require('fs');

fs.readFile('sample.jpg',function(err,data){
    if(err)
    {
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
        var text=data.toString('utf-8');
        console.log(text);
        var buf=new Buffer(text,'utf-8');
        console.log(buf);
    }
});