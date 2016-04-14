var $ = require('jquery');
var hljs = require ('highlight');


$(document).ready( function(){
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);

    });
} );