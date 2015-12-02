$(document).ready(function(){

    var quotes = $('.quotes');
    if (quotes.quovolver) {
        $('.quotes').quovolver({
            autoPlay: true,
            autoPlaySpeed: 7000,
            transition: 'fade',
            transitionSpeed: 500,
            pauseOnHover: true,
            equalHeight: true
        });
    }

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

    if (window.Maplace) {
    var maplace = new Maplace({
        locations: [{
            lat: 47.614679,
            lon: -122.348280,
            zoom: 15,
            title: 'Test',
            html: '<p>Pizza Planet</p><p>2422 1st Ave.</p><p>Seattle, WA 98121</p>'
        }]
    });
    maplace.Load();
    }

});
