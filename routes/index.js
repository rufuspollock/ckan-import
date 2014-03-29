var Importer = require('../lib/import.js')
  ;

exports.home = function(req, res) {
  res.render('index.html', {
    title: 'Home'
  });
}

exports.apiImport = function(req, res) {
  // req.query
  res.json({
    status: 'ok'
  });
};

