$(function() {
/*
$(document).ready(function(){
        $(".owl-carousel.block-one-slider").owlCarousel();
         $(".owl-carousel.block-mini-second-slider").owlCarousel();
});

    $('.owl-carousel.block-one-slider').owlCarousel({
        loop:true,
        nav:true,
        merge:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    $('.owl-carousel.block-mini-second-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
    */
//(function($) { 
$(document).ready(function(){
    $('.block-slider').slick();
});
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true        
    });
//})(jQuery);

$(document).ready(function() {
    $('.slider-nav').magnificPopup({
        delegate: 'a',
        type: 'image'        
        //gallery: {
         //   enabled: true
        //}
    });
});

});

// модальное окно отправки формы

function AlertSubmit(){
    var __self = this;
    let modalWindow = document.getElementById('modal');
    let modalAlert = document.querySelector('.modal-alert');
    let buttonSubmit = document.getElementById('submit');

    buttonSubmit.onclick = function(){
        modalWindow.style.display = "block";
        modalAlert.style.top = screen.availHeight/2 - modalAlert.offsetHeight/1.5 + "px";
    
    }
}







