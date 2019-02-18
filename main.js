/*back to top */
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#gora').fadeIn();
        }
        else
        {
            $('#gora').fadeOut();
        }
    })

    $("#gora").click(function(){
        $('html,body').animate({scrollTop : 0},500);
        
    });  
    $('#gora').hide();
});

/*menu nav */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  } 
  /*lightbox */
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var  i;
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
