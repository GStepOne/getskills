'use strict';

var fs=require('fs');

var data='escape from this co';

fs.writeFile('fswrite.txt',data,function(err){
    if(err)
    {
        console.log(err);
    }else{
        console.log('ok');
    }
})