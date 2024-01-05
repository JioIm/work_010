$(function () {
    $('.main').fullpage({
        anchors: ["p1", "p2", "p3", "p4"],
        menu: '#custom_nav',
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);
            if (index == 2 || index == 3) {
                if (!$('.Gnb').hasClass('on')) {
                    $('.Header').addClass('on')
                }
            } else {
                $('.Header').removeClass('on')
            }

            if (index == 4) {
                $('.Header').hide();
            } else {
                $('.Header').show();
            }
            $('#custom_nav li').removeClass('active');
            $('#custom_nav li[data_menuanchor="' + anchorLink + '"]').addClass('active');
        },

        navigation: false,
        responsiveWidth: 768,
        responsiveHeight: 800,

    });

    $('#custom_nav li').click(function () {
        var index = $(this).index() + 1;
        $.fn.fullpage.moveTo(index);
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


    $('.side_nav li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
    });


    $('.mopen').on('click', function () {
        $('.Header').removeClass('on');
        $('.Gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    })
})

