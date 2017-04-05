//LINKS
function yelp() {
  window.open("https://www.yelp.com/biz/tokiwa-sushi-moorpark-3");
}

function menu() {
  window.open("http://image.zmenu.com/menupic/1897058/7b0a62c4-27aa-4189-b85e-43a49e437891.jpg")
}

function photos() {
  window.open("https://www.yelp.com/biz_photos/tokiwa-sushi-moorpark-3");
}

function addback() {
  document.getElementById("body").style.background = "red";
}

//PRELOAD IMAGES
$('<img src="scss/images/ramen1.jpg"/>');
$('<img src="scss/images/prep1.jpg"/>');
$('<img src="scss/images/ramen2.jpg"/>');
$('<img src="scss/images/prep2.jpg"/>');

//SLIDESHOW FOR IMAGES
var slideIndex = 0;
carousel(1);

function carousel(int) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";
      x[i].style.animation = "fade-out 2s forwards";
    }
    if(int === 1) {
    slideIndex++;
    }
    if(int === -1) {
    slideIndex--;
    }
    if (slideIndex > x.length) {slideIndex = 1}
    if (slideIndex <= 0) {slideIndex = 4}
    console.log(slideIndex)
    x[slideIndex-1].style.animation = "fade-in 3s forwards";
    x[slideIndex-1].style.opacity = "1";
}

//BODY IMAGE CHANGE ON SCROLL
$(document).ready( function(){
  $(window).scroll(function(){
    let fromTop = document.documentElement.clientHeight*3.25;
  if(jQuery(window).scrollTop() > fromTop) {
    document.getElementById("body").style.backgroundImage = "url('scss/images/prep-fish-edit.jpg')";
  }
  else {
    document.getElementById("body").style.backgroundImage = "url('scss/images/menus.jpg')";
  }
})})

function viewPos() {
  console.log($(window).innerWidth())
}

$(window).scroll(function() {
  if($(window).scrollTop() > 0) {
    let btns = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < btns.length; i++) {
      btns[i].style.color = "white";
    }
  }
  if($(window).scrollTop() > 700) {
    let btns = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < btns.length; i++) {
      btns[i].style.color = "black";
    }
  }
  if($(window).scrollTop() > 1455) {
    let btns = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < btns.length; i++) {
      btns[i].style.color = "white";
    }
  }
  if($(window).scrollTop() > 2110) {
    let btns = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < btns.length; i++) {
      btns[i].style.color = "black";
    }
  }
  if($(window).scrollTop() > 2910) {
    let btns = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < btns.length; i++) {
      btns[i].style.color = "white";
    }
  }


})

$(document).ready(function() {
  if($(window).innerWidth() < 650) {
    document.getElementById("body-div-images").style.top = "50vw";
    document.getElementById("mySlides-span-2").style.bottom = "25vw";
    document.getElementById("mySlides-span-2").style.right = "0";
  }
})

$(window).resize(function() {
  if($(window).innerWidth() < 650) {
    document.getElementById("body-div-images").style.top = "50vw";
    document.getElementById("mySlides-span-2").style.bottom = "25vw";
    document.getElementById("mySlides-span-2").style.right = "0";
  }
  else {
    document.getElementById("body-div-images").style.top = "12vw";
    document.getElementById("mySlides-span-2").style.bottom = "17vw";
    document.getElementById("mySlides-span-2").style.right = "-3vw";
  }
})
