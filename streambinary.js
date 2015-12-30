'use strict';

var fs=require('fs');

var rs=fs.createWriteStream('output2binary.txt');

rs.write(new Buffer('use Stream write Binary data...\n','utf-8'));
rs.write(new Buffer('END.','utf-8'));
rs.end();