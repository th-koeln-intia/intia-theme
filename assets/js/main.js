import './bulma-carousel/js/bulma-carousel.js';
// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel',{
    slidesToScroll: 1,
    slidesToShow: 1,
    icons: {
        'previous': `<img src="../assets/img/arrow-left.png"></img>`,
        'next': `<img src="../assets/img/arrow-left.png" style="transform: rotate(180deg);"></img>`}
});