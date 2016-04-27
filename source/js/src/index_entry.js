"use strict";

window.zepto=window.$ = require('zepto');
var hljs = require ('highlight');
var ScrollIt = require('./lib/scrollit.js');
var Console = require('./lib/console.js');
require('../../lib/velocity.min.js');

$(document).ready( function(){
    var console = new Console();
    console.init();

    $('.scroll.btn').hide();
    var scrollIt = new ScrollIt('.mb-headb');
    scrollIt.init();

    // 加载多说
    (function () {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';
        ds.async = true;
        ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
    // 加载百度统计
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?"+window.baidutj;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
});