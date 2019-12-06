jQuery(document).ready(function () {
    if ($('#wrapper .icon-wrap').css('display') == 'none') {
        
        $('a[href*=\\#].scroll').on('click', function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, "swing");
        });
    } else {
        $('a[href*=\\#].scroll').on('click', function (event) {
            event.preventDefault();
            $('html,body').delay(200).animate({
                scrollTop: $(this.hash).offset().top - 360
            }, 1000, "swing");
        });
    }

    if (window.location.href.indexOf("thank") >= 0) {
        setTimeout(function () {
            window.location = (window.location.origin);
        }, 3000);
    }

    $('#wrapper .icon-wrap').on('click', function() {
        $('.fixed-sidebar').addClass('open');
        $('.sidebar-overlay').addClass('open');
        $('html, body').css('overflow', 'hidden');
        $('html, body').css('position', 'fixed');
    })

    $('a.close').on('click', function() {
        $('.fixed-sidebar').removeClass('open');
        $('.sidebar-overlay').removeClass('open');
        $('html, body').css('overflow', 'inherit');
        $('html, body').css('position', 'static');
    })
});
