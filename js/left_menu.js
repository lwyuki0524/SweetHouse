window.onscroll = function() {myFunction()};

var header = document.getElementById("left_menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky_leftmenu");
  } else {
    header.classList.remove("sticky_leftmenu");
  }
}