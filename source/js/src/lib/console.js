'use strict';

function Console (){

}

Console.prototype = {
    init: function () {
        console.log("%cJolyon's Blog", "font-size: 4em; color:#ff6347; font-family:Lato, 'PingFang SC', sans-serif");
        console.log('%c很高兴遇见你. 如果你喜欢我的主题「Tomato」, 快去Github提issues或者贡献PR吧 :)','font-size: 1.4em; color:#555;');
        console.log('%c欢迎通过微博或者其他社交账号联系我, 邮箱: jolyon129@outlook.com','font-size: 1.4em; color:#555;');
    }
}

module.exports = Console;