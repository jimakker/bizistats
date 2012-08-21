
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
  // console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});



var statsArray = exports.statsArray =  [];



setInterval(function(){
  request('http://www.donostia.org/info/ciudadano/camaras_trafico.nsf/dameEstaciones?OpenAgent&idioma=cas', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body) // Print the google web page.
      statsArray.push({date: new Date(),data: JSON.parse(body)})
      new BufferedWriter ("file", { encoding: "utf8",append: true})
    .on ("error", function (error){
        console.log (error);
    })

    //From the end of the file:
    .newLine () //Writes EOL (OS dependent; \r\n on Windows, otherwise \n)
    .write (JSON.stringify({date: new Date(),data: JSON.parse(body)})) //Writes "Third line"
    .close (); //Closes the writer. A flush is implicitly done.
      // console.log(statsArray)
    }
  })
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


// var input = fs.createReadStream('file');
console.log("Going to read lines");
console.log("TROLLACO");
// readLines(input, func);


var historyArray = exports.historyArray =  [];

function func(data) {
  console.log(data);
  if(typeof data!="undefined"){
    console.log("DEFINED");
  } else {
    console.log("UNDEFINED");
  }
  if(data!=null){
    console.log("NOT NULL");
  } else {
    console.log("NULL");
  }

    console.log('Line: ' + data);
    historyArray.push(JSON.parse(data));
    statsArray.push(JSON.parse(data));
 
}
