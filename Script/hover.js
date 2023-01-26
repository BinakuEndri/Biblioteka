var books = document.querySelectorAll('.book-box');

[...books].forEach((book)=> {
  book.addEventListener('mouseover',function(){  
    book.classList.add('isHover');
   });
   book.addEventListener('mouseleave',function(){  
    book.classList.remove('isHover');
   });
   
})

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
