'use strict';
var fs=require('fs');
var rs=fs.createReadStream('sample.txt');
var ws=fs.createWriteStream('copid.txt');
rs.pipe(ws);