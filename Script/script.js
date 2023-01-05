window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Initialize variables
var slideIndex = 1;

// Show the first card
showSlides(slideIndex);

// Function to show the next or previous card
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show a specific card
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the cards
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("karta-group");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}



let values = document.querySelectorAll(".number");
let interval = 4000;

values.forEach((values) => {
  let start =0;
  let end = parseInt(values.getAttribute("data-val"));
  let duration = Math.floor( interval / end);
  let counter = setInterval(function(){
    start +=1;
    values.textContent = start;
    if(start == end){
      clearInterval(counter);
    }
  }, duration);
});


var books = document.querySelectorAll('.book-box');

[...books].forEach((book)=> {
  book.addEventListener('mouseover',function(){  
    book.classList.add('isHover');
   });
   book.addEventListener('mouseleave',function(){  
    book.classList.remove('isHover');
   });
   
})