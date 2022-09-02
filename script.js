// FIXED HEADER
window.onscroll = function () {
  transitionHeader();
}
var header = document.getElementById("Header");
var scrolling = header.offsetTop;
function transitionHeader() {
  if (window.pageYOffset > scrolling) {
    header.classList.add("in-transition");
  } else {
    header.classList.remove("in-transition");
  }
}

// // MENU BURGER

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  const hiddenArea = document.getElementById('body');
  hiddenArea.classList.toggle('hide-scroll');

  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('click', transitionHeader);
btnMobile.addEventListener('touchstart', toggleMenu);