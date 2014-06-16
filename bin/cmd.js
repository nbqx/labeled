#!/usr/bin/env node
var labeled = require(__dirname+"/../");

var color = process.argv[2] || "red";
labeled(color).on('data',function(data){
  if(data!==''){
    console.log(data);
  }
});
