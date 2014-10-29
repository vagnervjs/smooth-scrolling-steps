/*
    Step Scroll module
*/

var stepScroll = (function() {
    'use strict';

    var stepScroll = {
        go: function(action) {
            var _self = this;

            var fn = function () {
                if ($('.current').length) {
                    _self._scrollTo($('.current'));
                }
            }

            if(action === 'up') {
                if (!$('section.current').hasClass('first')) {
                    _self._setCurrentClass($('section.current').prev());
                    fn();
                }
            }
            else {
                if (!$('section.current').hasClass('last')) {
                    _self._setCurrentClass($('section.current').next());
                    fn();
                }
            }
        },

        setCurrentVisibleEl: function() {
            var _self = this,
                cutoff = $(window).scrollTop();

            $('section').each(function() {
                if($(this).offset().top + $(this).height() > cutoff) {
                    _self._setCurrentClass($(this));
                    return false;
                }
            });
        },

        _scrollTo: function($el) {
            var to;

            //find scroll to position
            if ($('.current').hasClass('features')) {
                to = $el.offset().top + 10;
            }
            else {
                to = $el.offset().top - 60;
            }

            // animate scroll
            // ref: http://easings.net
            $('html,body').animate({
                scrollTop: to
            }, 600, 'easeInOutCubic');

            return false;
        },

        _setCurrentClass: function($el) {
            $('section').removeClass('current');
            $el.addClass('current');
        },
    };

    return stepScroll;
}());
