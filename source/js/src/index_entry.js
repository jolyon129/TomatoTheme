"use strict";

window.zepto=window.$ = require('zepto');
var hljs = require ('highlight');
var ScrollIt = require('./lib/scrollit.js');
var Toc = require('./lib/toc.js');
require('../../lib/velocity.min.js');

$(document).ready( function(){

    //adjustCSS();
    function adjustCSS() {
        var w_h = $(document).height();
        $('.aside').height(w_h);

    }
});