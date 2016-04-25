"use strict";

window.zepto=window.$ = require('zepto');
var hljs = require ('highlight');
var ScrollIt = require('./lib/scrollit.js');
require('../../lib/velocity.min.js');

$(document).ready( function(){
    $('.scroll.btn').hide();
    var scrollIt = new ScrollIt('.mb-headb');
    scrollIt.init();
});