"use strict";


function HeaderMove() {

}

var cusEvents = {
    fixNav: 'fixNavEvent',
    unfixNav: 'unfixNav'
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
            if (self.windowOffsetY > 10) {
                $(window).trigger(cusEvents.fixNav);
            }
            else if(self.windowOffsetY <= 10 ){
                $(window).trigger(cusEvents.unfixNav);
            }
            self.tempY = window.scrollY;
        });
        $(window).on(cusEvents.unfixNav, function() {
            headerElement.removeClass('fixed');
            self.hasHiddenHeader = false;
        });
        $(window).on(cusEvents.fixNav, function() {
            headerElement.addClass('fixed');
            self.hasHiddenHeader = true;
        });

    }
};


module.exports = HeaderMove;