var exec = require('child_process').exec;
var labeled = require(__dirname);
var es = require('event-stream');
var through2 = require('through2');

var dest = "./samples";

labeled('blue')
  .pipe(through2.obj(function(o,enc,next){
    if(/.*\/Dirt\/samples/g.test(o)){
      this.push(o);
    }
    next();
  }))
  .pipe(es.map(function(o){
    exec('cp -R '+o+' '+dest);
  }));
