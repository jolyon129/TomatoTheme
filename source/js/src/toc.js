"use strict";

function Toc(){

}

Toc.prototype = {

    linkOffsetY: [],

    init: function() {
        var self = this;
        self.getHeaderlink();
        //pause
        
        //$('a.scroll').click(function(){
        //    $('html, body').velocity({
        //        scrollTop: $( $(this).attr('href') ).offset().top - 45
        //    }, 300);
        //
        //    return false;
        //});

        console.log(self.linkOffsetY);
        $(window).on('scroll', function() {
            var length = self.linkOffsetY.length;
            var currentPageY = window.scrollY;
            var order, temp;
            order = self.search(self.linkOffsetY, currentPageY);
            console.log("当前位置:" + currentPageY);
            console.log("当前顺序:" + order);
        });
    },
    getHeaderlink: function() {
        var links = $('.headerlink');
        var temp;
        var self = this;
        for(temp=0; temp<links.length; temp++){
            self.linkOffsetY[temp] = $(links[temp]).offset().top;
        }
    },
    search: function(srcArray, des) {
        var low = 0;
        var high = srcArray.length-1;

        while(low <= high) {
            var middle = (low + high)/2;
            // pause
            if(des === srcArray[middle] || (des<srcArray[middle] && des>srcArray[middle-1]) ) {
                return middle;
            }else if(des < srcArray[middle]) {
                high = middle - 1;
            }else {
                low = middle + 1;
            }
        }
        return -1;
    }
};



module.exports = Toc;