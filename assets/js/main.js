import './bulma-carousel/js/bulma-carousel.js';
// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel',{
    slidesToScroll: 1,
    slidesToShow: 1,
    icons: {
        'previous': `<img src="../assets/img/arrow-left.png"></img>`,
        'next': `<img src="../assets/img/arrow-left.png" style="transform: rotate(180deg);"></img>`}
});

// Scrollarrows
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

// Searchbar
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

// Simple storage for site wide changes
var siteData
window.addEventListener('load', (event) => {
    init()
});
// Triggered on load of body element
function init() {
    loadFromStorage()
    if (siteData == null) {
        setDefaultData()
    }
}

// Default data when no data is found
function setDefaultData() {
    updateSiteData(null, 1.2)
}
function updateSiteData(newSiteData, newFontSize = 1.2) {
    console.log("update " + newSiteData + " fontsize: " +newFontSize )
    if (newSiteData == null) {
        siteData = {
            fontSize: newFontSize
        }
    } else {
        siteData = newSiteData
    }
    saveToStorage()
    updateSite()
}
function saveToStorage(){
    localStorage.setItem("intiaSiteData", JSON.stringify(siteData))
}
function loadFromStorage() {
    var data = JSON.parse(localStorage.getItem("intiaSiteData"))
    loadFromJson(data)
}
function loadFromJson(jsonString){
    if (jsonString !== null) {
        updateSiteData(jsonString)
    }
}

// Trigger update for all elements that are based on site wide data
function updateSite() {
    updateFontSize()
}

// Font size
var html=document.querySelector('html');

function updateFontSize() {
    html.style.fontSize=siteData.fontSize+"rem";
}

// Change font size Button
document.getElementById("changeFontsize").addEventListener("click", changeFontSize);
function changeFontSize() {
    console.log("Fontsize changed "+ (siteData.fontSize == 1.2) ? 1.5 : 1.2)
    updateSiteData(null, (siteData.fontSize == 1.2) ? 1.5 : 1.2)
  }