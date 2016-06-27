'use strict';

(function(){
    var example1 = document.querySelector('#example1');
    var example2 = document.querySelector('#example2');
    var exampleOutput = document.querySelector('#exampleOutput');
    var newURL = document.querySelector('#newURL');
    var oldURL = document.querySelector('#oldURL');
    
    example1.innerHTML = appUrl + '/new/https://www.google.com';
    example1.href = appUrl + '/new/https://www.google.com';
    
    example2.innerHTML = appUrl + '/new/https://www.yahoo.com';
    example2.href = appUrl + '/new/https://www.yahoo.com';
    
    exampleOutput.innerHTML = '{ "original_url" : "https://www.google.com", "short_url" : appUrl + "/5" }';
    
    newURL.innerHTML=appUrl + '/5';
    newURL.href=appUrl + '/5';
    oldURL.innerHTML="https://www.google.com";
    oldURL.href="https://www.google.com";
})();