let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
});


let word = document.querySelector(".word");

setInterval(()=>{
 changeTxt();
},1000)

let changeTxt= (()=>{
   word.style.opacity='1';
})


var mixer = mixitup('.portfolio-gallery');