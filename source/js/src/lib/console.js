'use strict';

function Console (){

}

Console.prototype = {
    init: function () {
        console.log("%cJolon's Blog", "font-size: 4em; color:#ff6347; font-family:Lato, 'PingFang SC', sans-serif");
        console.log('%c很高兴遇见你.如果你喜欢我的主题「Tomato」,欢迎去Github提issues或者贡献PR :)','font-size: 1.4em; color:#555;');
        console.log('%c邮箱:jolyon129@outlook.com','font-size: 1.4em; color:#555;');
    }
}

module.exports = Console;