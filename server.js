
/**
 * Module dependencies.
 */
var http = require('http');
var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api');
var request = require('request');
var BufferedWriter = require('buffered-writer');
var fs = require('fs');
var path = require('path');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/partial/:id', routes.partial);

// JSON API

app.get('/api/name', api.name);
app.get('/api/stats', api.stats);
app.get('/api/current', api.current);
app.get('/api/five', api.five);
// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

app.listen(3000, function(){
  console.log("Server started");
});



var statsArray = exports.statsArray =  [];



setInterval(function(){
  var d = new Date();
  if(d.getHours()>20 || d.getHours()<5){ // dirudienez nodester.com zerbitzarian GMT darabilkite. Hau txapuza bat da
    // console.log("Discarding lecture");
  } else {
    request('http://www.donostia.org/info/ciudadano/camaras_trafico.nsf/dameEstaciones?OpenAgent&idioma=cas', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        statsArray.push({date: new Date(),data: JSON.parse(body)})
        path.exists("file", function (exists) {
          if(exists){
            new BufferedWriter ("file", { encoding: "utf8",append: true})
            .on ("error", function (error){
                console.log (error);
            })
            .newLine () 
            .write (JSON.stringify({date: new Date(),data: JSON.parse(body)})) 
            .close ();
          } else {
            new BufferedWriter ("file", { encoding: "utf8"})
            .on ("error", function (error){
                console.log (error);
            })
            .write (JSON.stringify({date: new Date(),data: JSON.parse(body)})) 
            .close ();
          }
        });

      }
    })
  }
}, 60000)


  function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    var last  = 0;
    while (index > -1) {
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

path.exists("file", function (exists) {
  if(exists){
    var input = fs.createReadStream('file');
    readLines(input, func);
  }  
});


var historyArray = exports.historyArray =  [];

function func(data) {
    historyArray.push(JSON.parse(data));
    statsArray.push(JSON.parse(data));
}
