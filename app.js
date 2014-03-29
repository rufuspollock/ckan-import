var express = require('express')
  , path = require('path')
  , nunjucks = require('nunjucks')
  , routes = require('./routes/index.js')
  ;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('TODO random secret'));
  app.use(express.static(path.join(__dirname, 'public')));
});

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views'));
env.express(app);

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});

app.get('/', routes.home);
app.get('/api/1/import', routes.apiImport);

exports.app = app;

