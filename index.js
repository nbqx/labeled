var spawn = require('child_process').spawn;
var es = require('event-stream');

var mdfind = "mdfind";
var colors = {
  "red": "1",
  "green": "2",
  "purple": "3",
  "blue": "4",
  "yellow": "5",
  "grey": "6",
  "gray": "6",
  "orange": "7"
};

function labeled(c){
  var color = colors[c];
  return es.child(spawn(mdfind,['kMDItemFSLabel == '+color]))
    .pipe(es.split())
};

module.exports = labeled;
