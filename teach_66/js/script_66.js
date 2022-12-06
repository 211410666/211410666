const navbar = document.querySelector('#navbar');
const insidebtn = document.querySelector('#inside-btn');
const navbarlinks = document.getElementById('navbar-links');



console.log('inside-btn', insidebtn); 
console.log('navbar-links', navbarlinks);

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});


insidebtn.addEventListener('click', function () {
  if (navbarlinks.style.display == "grid") {
    navbarlinks.style.display = "none";
  } else {
    navbarlinks.style.display = "grid";
  }
});