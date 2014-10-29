/*
    Landing scroll setup - Smooth scroll in steps
    - Dependencies:
        - jquery.mousewheel.js
        - jquery.scrollsteps.js
*/

$(document).ready(function() {
    $('body').scrollsteps({
        up: function() {
            stepScroll.go('up');
        },
        down: function() {
            stepScroll.go('down');
        },
    });

    stepScroll.setCurrentVisibleEl();

    //Check keys: page up, page down, home, end, up arrow, down arrow
    var keys = [33, 34, 35, 36, 38, 40];
    $(window).on('keyup',function(e) {
        if ($.inArray(e.keyCode, keys) !== -1) {
            stepScroll.setCurrentVisibleEl();
        }
    });
});
