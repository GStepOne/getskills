'use strict';

var fs=require('fs');

var rs=fs.createWriteStream('output1.txt','utf-8');
rs.write('使用Stream 写入文本数据...\n');
rs.write('END.');
rs.end();