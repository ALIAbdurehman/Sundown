const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function projectsAnime(){

    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none"
    })
    var elems = document.querySelectorAll(".elem")
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                var image = e.getAttribute("data-image")
                fixed.style.backgroundImage = `url(${image})`
            })
        })
}


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
}


projectsAnime()
swiper()


var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navImg = document.querySelector("nav img")
var flag = 0 
menu.addEventListener("click", function(){
  if(flag == 0){
    full.style.top = "0%"
    navImg.style.opacity = "0"
    flag = 1
  }else{
    full.style.top = "-100%"
    navImg.style.opacity = "100%"
  }
})