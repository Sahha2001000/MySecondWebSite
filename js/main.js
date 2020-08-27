$(function () {
    $('.header__slider').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        dotsClass: 'header__slider-dots'
    });
})
$(".header__btn-menu").click(function () { // задаем функцию при нажатиии на элемент с классом slide-toggle
    $(".header__menu-list").slideToggle(); // плавно скрываем, или отображаем все элементы <div>
});
