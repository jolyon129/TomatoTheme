"use strict";


function ScrollIt(eles) {
    this.targets = eles || '';
}

var cusEvents = {
    hideHeader: 'hideHeaderEvent',
    showHeader: 'showHeaderEvent',
    showGoTop: 'showGoTopEvent',
    hideGoTop: 'hideGoTopEvent'
};


ScrollIt.prototype = {
    headerOffsetY: 0,
    threshold: 40,
    tempY: 0,
    windowOffsetY: 0,
    hasHiddenHeader: false,
    init: function () {
        if (this.targets !== '') {
            this.bindEvent();
        }
    },
    bindEvent: function () {
        var self = this;
        //var headerElement = $(self.target);
        if (Array.isArray(self.targets)) {
            $(window).on(cusEvents.showHeader, function () {
                var index;
                for (index = 0; index < self.targets.length; index++) {
                    $(self.targets[index]).removeClass('hide');
                    self.hasHiddenHeader = false;
                }
            });
            $(window).on(cusEvents.hideHeader, function () {
                var index;
                for (index = 0; index < self.targets.length; index++) {
                    $(self.targets[index]).addClass('hide');
                    self.hasHiddenHeader = true;
                }
            });
            $(window).on(cusEvents.showGoTop, function () {
                var left_btn = $('.left-fixed-btn');
                if(left_btn) {
                    left_btn.removeClass('hide');
                }
            });
            $(window).on(cusEvents.hideGoTop, function () {
                var left_btn = $('.left-fixed-btn');
                if(left_btn) {
                    left_btn.addClass('hide');
                }
            });
        } else if (typeof self.targets === 'string') {
            $(window).on(cusEvents.showHeader, function () {
                $(self.targets).removeClass('hide');
                self.hasHiddenHeader = false;
            });
            $(window).on(cusEvents.hideHeader, function () {
                $(self.targets).addClass('hide');
                self.hasHiddenHeader = true;
            });
        }
        $(window).on('scroll', function () {
            self.windowOffsetY = window.scrollY - self.tempY;
            self.headerOffsetY = window.scrollY;
            if(window.scrollY > 60) {
                $(window).trigger(cusEvents.showGoTop);
            } else if(window.scrollY <= 60){
                $(window).trigger(cusEvents.hideGoTop);
            }
            // 如果用户下滑且超过40px, 且header还没有被隐藏则触发事件
            if (self.windowOffsetY > 0 && self.headerOffsetY > 40 && !self.hasHiddenHeader) {
                $(window).trigger(cusEvents.hideHeader);
            }
            else if (self.windowOffsetY < 0 && self.hasHiddenHeader) {
                $(window).trigger(cusEvents.showHeader);
            }
            self.tempY = window.scrollY;
        });

    }
};


module.exports = ScrollIt;