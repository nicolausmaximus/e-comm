sessionStorage["xyz"] = 0;

img1=document.getElementById("cat1");
img1.addEventListener("click", function(){
    sessionStorage["xyz"] = 1;
    sessionStorage["pqr"]= "BANGLES";
});

img2=document.getElementById("cat2");
img2.addEventListener("click", function(){
    sessionStorage["xyz"] = 2;
    sessionStorage["pqr"]= "BRACELETS";
});

img3=document.getElementById("cat3");
img3.addEventListener("click", function(){
    sessionStorage["xyz"] = 3;
    sessionStorage["pqr"]= "EARRINGS";
});

cat4=document.getElementById("cat4");
cat4.addEventListener("click", function(){
    sessionStorage["xyz"] = 4;
    sessionStorage["pqr"]= "NECKLACES";
});

cat5=document.getElementById("cat5");
cat5.addEventListener("click", function(){
    sessionStorage["xyz"] = 5;
    sessionStorage["pqr"]= "PENDANT SETS";
});

cat6=document.getElementById("cat6");
cat6.addEventListener("click", function(){
    sessionStorage["xyz"] = 6;
    sessionStorage["pqr"]= "RINGS";
});


$('.withOptions').slick({
    dots: true,
    autoplay:true,
   autoplaySpeed: 2000,
   centerMode:true,
   cssEase:'ease',
   draggable:true,
   pauseOnHover:false,
   useCSS:true,
   useTransform:true,
   variableWidth:true,
   swipe:true,
   swipeToSlide:true,
   touchMove:true,
   pauseOnFocus:false,
   pauseOnDotsHover:false,
  arrows:false,
  });