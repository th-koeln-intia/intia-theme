import './bulma-carousel/js/bulma-carousel.js';
// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel',{
    slidesToScroll: 1,
    slidesToShow: 1,
    icons: {
        'previous': `<img src="../assets/img/arrow-left.png"></img>`,
        'next': `<img src="../assets/img/arrow-left.png" style="transform: rotate(180deg);"></img>`}
});

var scrollUpArrow= document.getElementById("scroll-up");
var scrollDownArrow= document.getElementById("scroll-down");
var scrollStep=10,
	scrollTimer=null

scrollUpArrow.addEventListener("mouseenter", function(evt){
    scroll(-scrollStep)
})
scrollUpArrow.addEventListener("mouseleave", function(evt){
    if(scrollTimer!=null)clearTimeout(scrollTimer);
})
scrollDownArrow.addEventListener("mouseleave", function(evt){
    if(scrollTimer!=null)clearTimeout(scrollTimer);
})
scrollDownArrow.addEventListener("mouseenter", function(evt){
    scroll(scrollStep)
})
function scroll(yDisplacement){
    if(scrollTimer!=null)clearTimeout(scrollTimer);

  scrollTimer = setTimeout(function(){
      window.scroll({
        top:window.scrollY+yDisplacement,
      left:0,
      behavior: 'smooth'
      })  
      scroll(yDisplacement)
  }, 50);
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollDownArrow.classList.add("is-hidden");
    }else if(window.pageYOffset === 0){
        scrollUpArrow.classList.add("is-hidden");
    }else{
        scrollDownArrow.classList.remove("is-hidden"); 
        scrollUpArrow.classList.remove("is-hidden"); 
    }
};