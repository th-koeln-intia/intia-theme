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

document.getElementById("openSearch").addEventListener("click", openSearch);
document.getElementById("closeSearch").addEventListener("click", closeSearch);
document.getElementById("search-input").addEventListener("input", showsearchresults);

var searchOverlay = document.getElementById("SearchOverlay");
var navmenu = document.getElementById("navmenu");
var resultsContainer = document.getElementById("results-container");
var searchInput = document.getElementById("search-input");

function openSearch() {
    searchOverlay.style.display = "flex";
    navmenu.style.display = "none";
}
  
function closeSearch() {
    searchOverlay.style.display = "none";
    navmenu.style.display = "flex";
}


function showsearchresults(e) {
    if(e.target.value.length>0){
        resultsContainer.style.display = "block";
        searchInput.style.borderBottomLeftRadius = "0px";
        searchInput.style.borderBottomRightRadius = "0px";
    }else{
        resultsContainer.style.display = "none";
        searchInput.style.borderBottomLeftRadius = "45px";
        searchInput.style.borderBottomRightRadius = "45px";
    }
}