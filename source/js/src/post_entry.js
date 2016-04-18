"use strict";

window.zepto=window.$ = require('zepto');
var hljs = require ('highlight');
var ScrollIt = require('./scrollit.js');
var Toc = require('./toc.js');
require('../../lib/velocity.min.js');

$(document).ready( function(){
    var scrollIt = new ScrollIt();
    var toc = new Toc();
    // 加载多说
    window.duoshuoQuery = {short_name:"lizhuolun"};
    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
    checkDs();
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    toc.init();
    scrollIt.init();

    function checkDs(){
        if($('#ds-reset').length > 0){
            console.log("youle");
            $('.loading').hide();
            return ;
        }
        setTimeout(checkDs,500);
    }
} );