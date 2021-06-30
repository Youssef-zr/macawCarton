$(() => {
    // load icon ---------------------
    setTimeout(() => {
        $('body').css({
            overflow: 'visible'
        })
        $('.load-icon').fadeOut(700)
    }, 1500);

    // slide up ---------------------
    let slideUpBTn = $('.slide-up');


    $(window).scroll(() => {
        checkSlideUp();
        navScroll();
    })

    function checkSlideUp() {

        if ($('html,body').scrollTop() > 600) {
            slideUpBTn.fadeIn(700)
        } else {
            slideUpBTn.fadeOut(700)
        }
    }

    checkSlideUp();

    slideUpBTn.click(() => {
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })
    $('.navbar-brand').click((e) => {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })


    // navigation click --------------
    let nav_items = $('#section-header').find(".nav-item .nav-link");
    nav_items.on('click', function (e) {
        e.preventDefault();

        let $data_scroll = $(this).data('scroll');
        $('html,body').animate({
            scrollTop: $('.' + $data_scroll).offset().top - 60
        }, 700)
        // add class active
        $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');

        // hide nav-collapse
        if ($(window).width() <= 968) {
            $(".navbar-collapse").slideUp(500)
        }

    });

    // add class blue to navigation when scrolling
    function navScroll() {

        // fix navigation
        let $nav = $('.navbar');

        if ($('html,body').scrollTop() >= 30) {
            $nav.addClass('bg-blue')
        } else {
            $nav.removeClass('bg-blue');
        }

        // add class active to nav items
        for (i = 0; i < nav_items.length; i++) {
            let $nav_item = $(nav_items[i]);
            if ($('html,body').scrollTop() + 80 >= $('.' + $nav_item.data('scroll')).offset().top) {
                $nav_item.addClass('active').parent('li').siblings().find('a').removeClass('active')
            }
        }

    };
    navScroll();

    // show navigation bar
    $('.navbar-toggler').click(function () {
        $(".navbar-collapse").slideToggle(700)
    })

})