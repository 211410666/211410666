const nav = document.querySelector('#nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
      nav.classList.add('nav-fix');
    } else {
      nav.classList.remove('nav-fix');
    }
  });