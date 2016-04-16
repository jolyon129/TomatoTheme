"use strict";

window.$ = require('jquery');
var hljs = require ('highlight');
var HeaderMove = require('./headerMove.js');
var Toc = require("./toc.js")

$(document).ready( function(){
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    var headerMove = new HeaderMove();
    headerMove.init();
} );