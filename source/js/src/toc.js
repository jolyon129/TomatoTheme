"use strict";

function Toc(){

}

Toc.prototype = {

    linkOffsetY: [],

    offset: -47,

    init: function() {
        var self = this;
        //记录值
        self.getHeaderlink();
        //pause

        $('a.scroll').click(function(){
            $( $(this).attr('href') )
                .velocity('stop')
                .velocity("scroll", {duration: 300, offset: self.offset});
            return false;
        });

        console.log(self.linkOffsetY);
        self.tocTrack();
    },
    tocTrack: function() {
        var timer, currentPageY, order;
        var self = this;
        $(window).on('scroll', function() {
            // 延迟执行, 判断scroll结束
            if(timer){
                clearTimeout(timer);
            }
            currentPageY = window.scrollY;
            timer = setTimeout(function(){
                console.log('scrolling ends..');
                order = self.search(self.linkOffsetY, currentPageY);
                console.log("当前位置:" + currentPageY);
                console.log("当前顺序:" + order);
                if($('a.scroll.nav-link.on').length !== 0){
                    $('a.scroll.nav-link.on').removeClass('on');
                }
                $($('a.scroll.nav-link')[order]).addClass('on');

            },40);
        });
    },
    getHeaderlink: function() {
        var links = $('.headerlink');
        var temp;
        var self = this;
        for(temp=0; temp<links.length; temp++){
            self.linkOffsetY[temp] = $(links[temp]).offset().top+self.offset;
        }
    },
    search: function(srcArray, des) {
        var length = srcArray.length;
        var order = 0;
        while(order < length-1){
            if(des < srcArray[order] && order === 0){
                return 0;
            }else if(des < srcArray[order] && order > 0 && des > srcArray[order-1]){
                return order-1;
            }
            else if (des > srcArray[order] && order+1 <= length && des < srcArray[order+1]){
                return order;
            }else if (des === srcArray[order]){
                return order;
            }
            order ++;
        }
        return order;
    }
};



module.exports = Toc;