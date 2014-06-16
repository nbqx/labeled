## labeled

osx `mdfind kMDItemFSLabel == ?` wrapper

## Usage

    $ git clone https://github.com/nbqx/labeled.git
    $ cd labeled
    $ npm link . 
    $ labeled red
    $ labeled blue
    ....

with [percol](https://github.com/mooz/percol) or [peco](https://github.com/lestrrat/peco) and xargs

    $ labeled blue | peco | xargs open

or

    $ npm install git://github.com/nbqx/labeled.git

then

```js
var exec = require('child_process');
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
```
