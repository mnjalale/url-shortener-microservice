'use strict';

var path =process.cwd();
var UrlAliasHandler = require(path + "/app/controllers/server/urlAliasHandler.js");

module.exports = function(app){
    var urlAliasHandler = new UrlAliasHandler();
    app.route('/')
        .get(function(req,res){
            res.sendFile(path+ '/public/index.html');
        });
        
    app.route('/new/*')
        .get(urlAliasHandler.saveUrlAlias);
   
    app.route('/:shortenerCode')
        .get(urlAliasHandler.getUrlAliasByCode);
};