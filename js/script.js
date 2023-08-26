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
        arrows:false
      });
})

// ========== Slik clider end here ============
// $(function(){
//     $('.personal_info').tilt({
//         scale: 1.2
//     })
// })

// ========== Slik clider end here ============
// ========== mixit start here ============
$(function(){
    var containerEl = document.querySelector(".mixit_main");
    var mixer = mixitup(containerEl, {
        animation: {
            duration: 1000
        }
    });
    // var containerEl = document.querySelector(".mixit_main");
    // var mixer = mixitup(containerEl,{animation:{ duration: 1000 }});
})
// ========== mixit end here ============
/* ======= Team Member area start here ===== */
$(function(){
    $('.team_wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false
      });
})
/* ======= Team Member area end here ===== */
/* ======= blog news area start here ===== */

$(function(){
    $('.news_blogs_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      });
})
/* ======= blog news area end here  ===== */
/* ======= Team Member area end here ===== */