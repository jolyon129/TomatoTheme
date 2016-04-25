"use strict";

window.zepto = window.$ = require('zepto');
var hljs = require('highlight');
var ScrollIt = require('./lib/scrollit.js');
var Toc = require('./lib/toc.js');
require('../../lib/velocity.min.js');

$(document).ready(function () {
    var scrollIt = new ScrollIt(['.header', '.mb-headbar']);
    var toc = new Toc();
    // 加载多说
    (function () {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';
        ds.async = true;
        ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('body')[0]).appendChild(ds);
    })();

    checkDs();
    $('pre').each(function (i, block) {
        hljs.highlightBlock(block);
    });
    toc.init();
    scrollIt.init();

    $('a.comment-btn').click(function(){
        $( $(this).attr('href') )
            .velocity('stop')
            .velocity("scroll", {duration: 300, offset: this.offset});
        return false;
    });

    $('a.toc-btn').click(function (event) {
        var ele = $('.post-toc');
        var icon = $('.toc-btn .icon-collapsedown');
        if(ele.hasClass('close')){
            ele.removeClass('close');
            icon.addClass('on');

        }else{
            ele.addClass('close');
            icon.removeClass('on');
        }
    });
    $('a.go-top').click(function() {
        $( $(this).attr('href') )
            .velocity('stop')
            .velocity("scroll", {duration: 300, offset: this.offset});
        return false;
    });
});


// 检查多说是否加载完成
function checkDs() {
    if ($('#ds-reset').length > 0) {
        $('.loading').hide();
        return;
    }
    setTimeout(checkDs, 500);
}