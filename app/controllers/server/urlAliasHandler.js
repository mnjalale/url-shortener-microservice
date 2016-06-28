'use strict';

var path = process.cwd();
var UrlAliases=require(path + "/app/models/urlAlias.js"),
    UrlModule = require("url");

function UrlAliasHandler(){
    
    this.getUrlAliasByCode = function(req,res){
        var shortenerCode = req.params.shortenerCode;
        
        UrlAliases.findOne({ 'code' : shortenerCode},{ '_id':false})
            .exec(function(err,result){
                if(err){
                    throw err;
                }
                
                if(result===null || result.length==0){
                    res.json({"error":"No short url found for given input"});
                }else{
                    res.redirect(result.url);
                }
            });
    };
    
    this.saveUrlAlias = function(req,res){
        var url = req.params.url;
        var origin = UrlModule.format({
            protocol: req.protocol,
            host: req.get('host')
        });
        
        
        //Validate URL
        var codeLength = Math.floor(Math.random() * (5-2+1)) + 2;
        var randomCode ="";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < codeLength; i++) {
            randomCode += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        var urlAlias = new UrlAliases({ url: url,code:randomCode});
        
        urlAlias.save(function(err,result){
            if(err){
                throw err;
            }
            
            res.json({"original_url":url,"short_url": origin + "/" + randomCode});
        });
        
        
    };
    
}

module.exports = UrlAliasHandler;