$(function () {
    $('.main').fullpage({
        anchors: ["p1", "p2", "p3", "p4"],
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);
            if (index == 2 || index == 3) {
                $('.Header').addClass('on')
            } else {
                $('.Header').removeClass('on')
            }
        },
        responsiveWidth: 768,

    });

    const MAIN_CONTENT_SLIDE = new Swiper('.main_content_slide', {
        // effect: 'fade',
        loop: 'true',
        pagination: {
            el: ".swiper-pagination",
        },
    })
    $('.MainInfo .itm').on('mouseenter', function () {
        $('.MainInfo .itm').removeClass('on');
        $(this).addClass('on');
    })


})

