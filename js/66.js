const nav = document.querySelector('#nav');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const navBtn = document.getElementById('nav-btn');



console.log('navBtn', navBtn);
console.log('sidebar', sidebar);


window.addEventListener('resize', function () {
  if (window.outerWidth > 870) {
    navBtn.style.display = "none";
    closeBtn.style.display = "none";
    sidebar.classList.remove('show-sidebar');
  }
  else {
    navBtn.style.display = "block";
  }
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
      nav.classList.add('nav-fix');
    } else {
      nav.classList.remove('nav-fix');
    }
});
  
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
  closeBtn.style.display = "block";
  navBtn.style.display = "none";
    
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  closeBtn.style.display = "none";
  navBtn.style.display = "block";
    
});