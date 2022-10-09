let slideIndex = 0;
showSlides(slideIndex);

//function currentSlide(n) {
//  showSlides((slideIndex = n));
//}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let lines = document.getElementsByClassName("line");
  //if (n > slides.length) {
  //  slideIndex = 1;
  //}
  //if (n < 1) {
  // slideIndex = slides.length;
  //}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < lines.length; i++) {
    lines[i].className = lines[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  lines[slideIndex - 1].className += " active";

  setTimeout(showSlides, 5000);
}

function send_form() {
  var form = (document.getElementById("after-form").style.display = "block");
}

function close_form() {
  var form = (document.getElementById("after-form").style.display = "none");
}
