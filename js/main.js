$(() => {

    let slideUpBTn = $('.slide-up');

    $(window).scroll(() => {
        checkSlideUp();
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
})