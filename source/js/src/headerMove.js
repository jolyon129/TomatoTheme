"use strict";


function HeaderMove() {

}

var cusEvents = {
    hideHeader: 'hideHeaderEvent',
    showHeader: 'showHeaderEvent'
};


HeaderMove.prototype = {
    headerOffsetY: 0,
    threshold: 40,
    tempY: 0,
    windowOffsetY: 0,
    hasHiddenHeader: false,
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var self = this;
        var headerElement = $('.header');
        $(window).on('scroll', function () {
            self.windowOffsetY = window.scrollY - self.tempY;
            self.headerOffsetY = window.scrollY;
            console.log("headerOffsetY: " + self.headerOffsetY);
            // 如果用户下滑且超过40px, 且header还没有被隐藏则触发事件
            if (self.windowOffsetY > 0 && self.headerOffsetY > 40 && !self.hasHiddenHeader) {
                $(window).trigger(cusEvents.hideHeader);
                console.log("Trigger "+cusEvents.hideHeader);
            }
            else if(self.windowOffsetY < 0 && self.hasHiddenHeader){
                $(window).trigger(cusEvents.showHeader);
                console.log("Trigger "+cusEvents.showHeader);
            }
            self.tempY = window.scrollY;
        });
        $(window).on(cusEvents.showHeader, function() {
            headerElement.removeClass('hide');
            self.hasHiddenHeader = false;
        });
        $(window).on(cusEvents.hideHeader, function() {
            headerElement.addClass('hide');
            self.hasHiddenHeader = true;
        });

    }
};


module.exports = HeaderMove;