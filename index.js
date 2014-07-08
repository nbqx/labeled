var spawn = require('child_process').spawn;
var es = require('event-stream');

var mdfind = "mdfind";
var colors = {
  "grey": "1",
  "gray": "1",
  "green": "2",
  "purple": "3",
  "blue": "4",
  "yellow": "5",
  "red": "6",
  "orange": "7"
};

function labeled(c){
  var color = colors[c];
  return es.child(spawn(mdfind,['kMDItemFSLabel == '+color]))
    .pipe(es.split())
};

module.exports = labeled;
