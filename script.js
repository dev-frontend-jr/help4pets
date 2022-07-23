// FIXED HEADER
window.onscroll = function () {
  fixedHeader();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// TOGGLE CONTAINER
// function tooggleButton() {
//   var element = document.getElementById("myTopnav");
//   element.classList.toggle("topnav");
// }

// MENU BURGER
function menuBurger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
