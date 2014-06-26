#!/usr/bin/env node
var labeled = require(__dirname+"/../");

var color = process.argv[2];
if(color!==undefined){
  labeled(color).on('data',function(data){
    if(data!==''){
      console.log(data);
    }
  });
}else{
  require('fs').createReadStream(__dirname+"/../h.txt").pipe(process.stdout);
}
