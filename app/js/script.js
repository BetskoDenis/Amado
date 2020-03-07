$(function () {
    $('#search').on('click', function () {
        $('body').toggleClass('on_search');
    });
    $('.close_search').on('click', function () {
        $('body').removeClass('on_search');
    });

    $('.burger_button').on('click', function () {
        $('.burger_button').toggleClass('active');
        $('.header__wrapper').toggleClass('open');
    });

    $('#date').on('click', function () {
        $('.sort').toggleClass('open');

    });
    $('#number').on('click', function () {
        $('.view').toggleClass('open');

    });
    $('.button_categories').on('click', function () {
        $('.shop_menu').toggleClass('open');

    });
    $('.close_btn').on('click', function () {
        $('.shop_menu').removeClass('open');

    });

    $('.owl_photo_block').owlCarousel({
        items: 1,
        loop:true,
        //center:true,
        margin:10,
        autoplay:true,
        nav:true,
     });
});