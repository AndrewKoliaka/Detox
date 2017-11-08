//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/waypoints/lib/jquery.waypoints.min.js
//= ../../node_modules/jquery.counterup/jquery.counterup.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= svg4everybody.min.js

$(document)
    .ready(function () {
        var mainMenu = $('#top-menu');
        var menuHeight = mainMenu.outerHeight();
        var slider = $('.slider__body');
        var header = $('.header');

        // support svg for ie
        svg4everybody();

        slider.slick({arrows: false, autoplay: false, autoplaySpeed: 5000});

        $('.video__play-icon').click(function (event) {

            var playBtn = event.target.tagName === "svg" ? $(event.target) : $(event.target).parent();
            var video = event.target.tagName === "svg" ?
                $(event.target).prev()[0] :
                $(event.target).parent().prev()[0]

            playBtn.hide();
            video.play();

            $(video).on('ended', function(){
                playBtn.show();
            });
        });

        $('.faq__question').click(function (event) {
            event.preventDefault();
            var question = event.target;
            var answer = $(question)
                .parent()
                .next()[0];
            var icon = $(question).next()[0];

            $(answer).slideToggle(200);
            $(question).toggleClass("faq__question--opened");
            $(icon).toggleClass("faq__icon--opened");
        });

        $('.slider__control--prev').click(function(event){
            event.preventDefault();
            slider.slick('slickPrev');
        });

        $('.slider__control--next').click(function(event){
            event.preventDefault();
            slider.slick('slickNext');
        });

        $('.leader__number').counterUp({
            time: 1000
        });

        $('.menu__trigger-btn').click(function(){
            $('.menu__list').slideToggle(200);
        });

        $(window).on('scroll', function() {
            if($(window).width() > 1000) {
                if($(this).scrollTop() > menuHeight + 20) {
                    mainMenu.addClass('menu--scroll');
                    header.css('padding-top', menuHeight + 'px');
                } else {
                    mainMenu.removeClass('menu--scroll');
                    header.css('padding-top', '0');
                }
            }
        });
    });
