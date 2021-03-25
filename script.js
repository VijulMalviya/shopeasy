//  navigation bar
 
 const cross = document.getElementById('cross');
 const nav = document.getElementById('nav');
 const menu = document.getElementById('menu');




menu.addEventListener('click', function(){
    nav.style.transitionDuration ="1s";
    nav.style.marginLeft = "0%";
})
cross.addEventListener('click', function(){
    nav.style.transitionDuration ="1s";
    nav.style.marginLeft = "-50%";
})


// products image gallery

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}