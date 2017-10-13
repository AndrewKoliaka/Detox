//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

$(document)
    .ready(function () {
        var slider = $('.slider__body');

        slider.slick({arrows: false, autoplay: true, autoplaySpeed: 5000});

        $('.video__play-icon').click(function (event) {
            var video = event.target.tagName === "svg" ?
                $(event.target).prev()[0] :
                $(event.target).parent().prev()[0]
            video.play();
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
    });