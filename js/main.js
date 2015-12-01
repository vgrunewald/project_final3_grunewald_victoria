$(document).ready(function(){
    var responsiveTabsDemo = $('#responsiveTabsDemo');
    if (responsiveTabsDemo.responsiveTabs) {
        responsiveTabsDemo.responsiveTabs({
            startCollapsed: false
        });
    }

    var bxSlider = $('.bxslider');
    if (bxSlider.bxSlider) {
        bxSlider.bxSlider({
            auto: true,
            controls: false,
            captions: true
        });
    }
});
