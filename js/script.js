/* ======= Preloader start here ===== */

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
/* ======= Preloader end here ===== */


// <!-- ======= Progress bar start here ======== -->


let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 80){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 25);


// <!-- ======= Progress bar 2nd ======== -->
let numbertwo = document.querySelector(".numbertwo");
let countertwo = 0;
setInterval(() => {
    if(countertwo == 30){
        clearInterval();
    }else{
        countertwo += 1;
        numbertwo.innerHTML = countertwo + "%";
    }
}, 65);
// <!-- ======= Progress bar 3rd ======== -->
let numberthree = document.querySelector(".numberthree");
let counterthree = 0;
setInterval(() => {
    if(counterthree == 60){
        clearInterval();
    }else{
        counterthree += 1;
        numberthree.innerHTML = counterthree + "%";
    }
}, 30);
// <!-- ======= Progress bar end here ======== -->
// ========== Slik clider start here ============
$(function(){
    $('.items_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
})

// ========== Slik clider end here ============


// ========== Slik clider end here ============
// ========== mixit start here ============
$(function(){
    var containerEl = document.querySelector(".mixit_main");
    var mixer = mixitup(containerEl, {
        animation: {
            duration: 1000
        }
    });
    //  // var mixer = mixitup(containerEl,{animation:{ duration: 1000 }});
})
// ========== mixit end here ============
/* ======= Team Member area start here ===== */
$(function(){
    $('.team_wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
})
/* ======= Team Member area end here ===== */
/* ======= blog news area start here ===== */

$(function(){
    $('.news_blogs_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
})
/* ======= blog news area end here  ===== */
/* ======= Team Member area end here ===== */