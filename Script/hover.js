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


var reserve = {
  
  init : () => {
    // (A1) GET LAYOUT WRAPPER
    let layout = document.getElementById("layout1");
 
    // (A2) GENERATE SEATS
    for (let i=65; i<=72; i++) { for (let j=1; j<=8; j++) {
      let seat = document.createElement("div");
      seat.innerHTML = String.fromCharCode(i) + j;
      seat.className = "seat";
      seat.onclick = () => { reserve.toggle(seat); };
      layout.appendChild(seat);
    }}
 
    // (A3) FOR DEMO ONLY - RANDOM TAKEN SEATS
    let all = document.querySelectorAll("#layout1 .seat"),
        len = all.length - 1, rnd = [];
    while (rnd.length != 8) {
      let r = Math.floor(Math.random() * len);
      if (!rnd.includes(r)) { rnd.push(r); }
    }
    for (let i of rnd) {
      all[i].classList.add("taken");
      all[i].onclick = "";
    }
  },
 
  // (B) CHOOSE THIS SEAT
  toggle : (seat) => {
    seat.classList.toggle("selected");
  },
 
  // (C) SAVE RESERVATION
  save : () => {
    // (C1) GET SELECTED SEATS
    let selected = document.querySelectorAll("#layout1 .selected");
 
    // (C2) ERROR!
    if (selected.length == 0) { alert("Duhet të zgjedhni karrige!"); }
 
    // (C3) SELECTED SEATS
    else {
      // (C3-1) GET SELECTED SEAT NUMBERS
      let seats = [];
      for (let s of selected) { seats.push(s.innerHTML); }
    }
  }
};
 
window.addEventListener("DOMContentLoaded", reserve.init);


function animateButton() {
  var button = document.getElementById("save");
  button.classList.add("animate");
  setTimeout(function(){
    button.classList.remove("animate");
  }, 300);
}

document.getElementById("save").addEventListener("click", function(){
  animateButton();
  reserve.save();
});